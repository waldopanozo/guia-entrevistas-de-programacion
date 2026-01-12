import express from 'express';
import { WebSocketServer } from 'ws';
import cors from 'cors';
import { spawn } from 'child_process';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;
const WS_PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta base del proyecto Angular
const PROJECT_ROOT = join(__dirname, '..');
const ASSETS_PATH = join(PROJECT_ROOT, 'src', 'assets');

// Almacenar conexiones WebSocket activas
const clients = new Map();

// ============================================
// API REST Endpoints
// ============================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Procesar instrucción (síncrono, retorna resultado completo)
app.post('/api/process', async (req, res) => {
  try {
    const { examId, instruction, examType } = req.body;

    if (!instruction) {
      return res.status(400).json({ error: 'Instruction is required' });
    }

    console.log(`[API] Processing instruction for exam: ${examId || 'general'}`);

    // Obtener datos del examen si se especifica
    let examData = null;
    if (examId) {
      examData = await loadExamData(examId);
    }

    // Procesar la instrucción
    const result = await processInstruction(instruction, examData, examId);

    res.json({
      success: true,
      result: result,
      examId: examId || null,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[API] Error processing instruction:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Obtener datos de un examen
app.get('/api/exam/:examId', async (req, res) => {
  try {
    const { examId } = req.params;
    const examData = await loadExamData(examId);
    
    if (!examData) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    res.json({
      success: true,
      exam: examData
    });
  } catch (error) {
    console.error('[API] Error loading exam:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Listar exámenes disponibles
app.get('/api/exams', async (req, res) => {
  try {
    const examsList = await loadExamsList();
    res.json({
      success: true,
      exams: examsList
    });
  } catch (error) {
    console.error('[API] Error loading exams list:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============================================
// WebSocket Server
// ============================================

const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws, req) => {
  const clientId = generateClientId();
  clients.set(clientId, ws);
  
  console.log(`[WS] Client connected: ${clientId} (Total: ${clients.size})`);

  // Enviar mensaje de bienvenida
  ws.send(JSON.stringify({
    type: 'connected',
    clientId: clientId,
    message: 'Connected to Cursor Bridge Server'
  }));

  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message.toString());
      console.log(`[WS] Received message from ${clientId}:`, data.type);

      switch (data.type) {
        case 'process':
          await handleProcessRequest(ws, clientId, data);
          break;
        
        case 'get_exam':
          await handleGetExam(ws, clientId, data);
          break;
        
        case 'list_exams':
          await handleListExams(ws, clientId);
          break;
        
        default:
          ws.send(JSON.stringify({
            type: 'error',
            message: `Unknown message type: ${data.type}`
          }));
      }
    } catch (error) {
      console.error(`[WS] Error processing message from ${clientId}:`, error);
      ws.send(JSON.stringify({
        type: 'error',
        message: error.message
      }));
    }
  });

  ws.on('close', () => {
    clients.delete(clientId);
    console.log(`[WS] Client disconnected: ${clientId} (Total: ${clients.size})`);
  });

  ws.on('error', (error) => {
    console.error(`[WS] Error for client ${clientId}:`, error);
    clients.delete(clientId);
  });
});

// ============================================
// Handlers
// ============================================

async function handleProcessRequest(ws, clientId, data) {
  const { examId, instruction, stream = true } = data;

  if (!instruction) {
    ws.send(JSON.stringify({
      type: 'error',
      message: 'Instruction is required'
    }));
    return;
  }

  // Enviar confirmación
  ws.send(JSON.stringify({
    type: 'processing',
    message: 'Processing your instruction...',
    examId: examId || null
  }));

  try {
    // Obtener datos del examen si se especifica
    let examData = null;
    if (examId) {
      examData = await loadExamData(examId);
      
      // Enviar datos del examen
      ws.send(JSON.stringify({
        type: 'exam_data',
        examId: examId,
        data: examData
      }));
    }

    // Obtener lenguaje de programación (si está presente)
    const language = data.language || 'javascript';
    
    // Procesar instrucción
    if (stream) {
      // Procesar y enviar en chunks (simulado)
      await processInstructionStream(ws, instruction, examData, examId, language);
    } else {
      // Procesar y enviar resultado completo
      const result = await processInstruction(instruction, examData, examId, language);
      ws.send(JSON.stringify({
        type: 'result',
        result: result,
        examId: examId || null
      }));
    }

    // Enviar finalización
    ws.send(JSON.stringify({
      type: 'complete',
      message: 'Processing complete'
    }));
  } catch (error) {
    console.error(`[WS] Error processing for ${clientId}:`, error);
    ws.send(JSON.stringify({
      type: 'error',
      message: error.message
    }));
  }
}

async function handleGetExam(ws, clientId, data) {
  try {
    const { examId } = data;
    const examData = await loadExamData(examId);
    
    ws.send(JSON.stringify({
      type: 'exam',
      examId: examId,
      data: examData
    }));
  } catch (error) {
    ws.send(JSON.stringify({
      type: 'error',
      message: error.message
    }));
  }
}

async function handleListExams(ws, clientId) {
  try {
    const examsList = await loadExamsList();
    ws.send(JSON.stringify({
      type: 'exams_list',
      exams: examsList
    }));
  } catch (error) {
    ws.send(JSON.stringify({
      type: 'error',
      message: error.message
    }));
  }
}

// ============================================
// Helper Functions
// ============================================

async function loadExamData(examId) {
  try {
    // Cargar lista de exámenes
    const examsListPath = join(ASSETS_PATH, 'exam-config.json');
    const examsListData = JSON.parse(await readFile(examsListPath, 'utf-8'));
    
    const examInfo = examsListData.exams.find(e => e.id === examId);
    if (!examInfo) {
      throw new Error(`Exam ${examId} not found`);
    }

    // Cargar configuración del examen
    const examConfigPath = join(ASSETS_PATH, examInfo.configFile);
    const examConfig = JSON.parse(await readFile(examConfigPath, 'utf-8'));
    
    return {
      info: examInfo,
      config: examConfig
    };
  } catch (error) {
    console.error(`Error loading exam ${examId}:`, error);
    throw error;
  }
}

async function loadExamsList() {
  try {
    const examsListPath = join(ASSETS_PATH, 'exam-config.json');
    const examsListData = JSON.parse(await readFile(examsListPath, 'utf-8'));
    return examsListData.exams;
  } catch (error) {
    console.error('Error loading exams list:', error);
    throw error;
  }
}

async function processInstruction(instruction, examData, examId, language = 'javascript') {
  // Analizar la instrucción y generar respuesta contextual
  const instructionLower = instruction.toLowerCase();
  let response = {
    instruction: instruction,
    examId: examId || null,
    processed: true,
    answer: '',
    suggestions: [],
    details: {},
    codeParts: []
  };

  if (examData) {
    const config = examData.config;
    const info = examData.info;

    // Analizar diferentes tipos de preguntas
    // Detectar si es solicitud de código (explícita o implícita por contenido del escenario)
    const isCodeRequest = instructionLower.includes('código') || instructionLower.includes('code') || 
        instructionLower.includes('implementar') || instructionLower.includes('implement') ||
        instructionLower.includes('ejemplo de código') || instructionLower.includes('code example') ||
        instructionLower.includes('genera el código') || instructionLower.includes('generate code') ||
        (instructionLower.includes('ejercicio') && instructionLower.includes('código')) ||
        (instructionLower.includes('exercise') && instructionLower.includes('code')) ||
        (instruction.includes('**Título:**') && instruction.includes('**Descripción:**')) || // Detectar formato de escenario completo
        instructionLower.includes('number of ways') || // Problemas de algoritmos
        instructionLower.includes('leetcode') ||
        instructionLower.includes('hard') ||
        instructionLower.includes('input:') && instructionLower.includes('output:') ||
        instructionLower.includes('constraints:') ||
        (instructionLower.includes('v1') || instructionLower.includes('v2') || instructionLower.includes('version'));
    
    // Detectar si es un problema de algoritmo/coding challenge
    const isAlgorithmProblem = instructionLower.includes('number of ways') ||
        (instructionLower.includes('grid') && instructionLower.includes('paint')) ||
        instructionLower.includes('leetcode') ||
        (instructionLower.includes('input:') && instructionLower.includes('output:')) ||
        (instructionLower.includes('input') && instructionLower.includes('output') && 
         (instructionLower.includes('example') || instructionLower.includes('constraints'))) ||
        instructionLower.includes('constraints:') ||
        instructionLower.includes('example 1:') ||
        instructionLower.includes('example 2:') ||
        ((instructionLower.includes('hard') || instructionLower.includes('medium') || instructionLower.includes('easy')) &&
         (instructionLower.includes('input') || instructionLower.includes('output')));
    
    if (isCodeRequest || isAlgorithmProblem) {
      // Solicitud de código - generar incrementalmente
      if (isAlgorithmProblem) {
        // Problema de algoritmo - generar por versiones
        const codeResult = generateAlgorithmCode(instruction, config || {}, info || {}, language);
        response.answer = codeResult.answer;
        response.codeParts = codeResult.codeParts || [];
        response.details = { type: 'algorithm', versions: codeResult.codeParts.length, language: language };
        response.incremental = true;
      } else {
        // Código normal de escenario
        const codeResult = generateCodeResponse(instruction, config, info);
        response.answer = codeResult.answer;
        response.codeParts = codeResult.codeParts || [];
        response.details = extractCodeDetails(config, instruction);
        response.incremental = true;
      }
    } else if (instructionLower.includes('estrategia') || instructionLower.includes('strategy')) {
      // Si pide estrategia completa, ofrecer opción incremental
      if (instructionLower.includes('completa') || instructionLower.includes('complete') || 
          instructionLower.includes('todo') || instructionLower.includes('all')) {
        response.answer = generateStrategyResponse(instruction, config, info);
        response.details = extractStrategyDetails(config);
        response.suggestions = [
          '💡 Tip: Puedes pedir código específico para cada escenario',
          '💡 Tip: Pregunta "dame el código del escenario 2" para ver implementación',
          '💡 Tip: Pregunta "muéstrame el código paso a paso" para verlo incrementalmente'
        ];
      } else {
        response.answer = generateStrategyResponse(instruction, config, info);
        response.details = extractStrategyDetails(config);
      }
    } else if (instructionLower.includes('escenario') || instructionLower.includes('scenario')) {
      response.answer = generateScenarioResponse(instruction, config);
      response.details = extractScenarioDetails(config, instruction);
    } else if (instructionLower.includes('tiempo') || instructionLower.includes('time')) {
      response.answer = generateTimeResponse(instruction, config);
      response.details = extractTimeDetails(config);
    } else if (instructionLower.includes('concepto') || instructionLower.includes('concept')) {
      response.answer = generateConceptsResponse(instruction, config);
      response.details = extractConcepts(config);
    } else if (instructionLower.includes('objetivo') || instructionLower.includes('objective')) {
      response.answer = generateObjectivesResponse(instruction, config);
      response.details = extractObjectives(config);
    } else if (instructionLower.includes('fase') || instructionLower.includes('phase')) {
      response.answer = generatePhasesResponse(instruction, config);
      response.details = extractPhases(config);
    } else {
      // Respuesta general basada en el examen
      response.answer = generateGeneralResponse(instruction, config, info);
      response.suggestions = generateSuggestions(instruction, config);
    }
  } else {
    // Procesamiento general sin datos de examen
    response.answer = 'No se especificó un examen. Por favor, selecciona un examen primero.';
    response.suggestions = generateGeneralSuggestions(instruction);
  }

  return response;
}

async function processInstructionStream(ws, instruction, examData, examId, language = 'javascript') {
  // Procesar instrucción y enviar respuesta en chunks
  const instructionLower = instruction.toLowerCase();
  const isCodeRequest = instructionLower.includes('código') || instructionLower.includes('code') || 
                        instructionLower.includes('implementar') || instructionLower.includes('implement') ||
                        instructionLower.includes('number of ways') ||
                        instructionLower.includes('input:') && instructionLower.includes('output:') ||
                        instructionLower.includes('constraints:');
  
  // Chunk inicial
  ws.send(JSON.stringify({
    type: 'stream_chunk',
    chunk: 'Analizando tu solicitud...',
    progress: 5
  }));
  await new Promise(resolve => setTimeout(resolve, 200));

  // Cargar datos si es necesario
  if (examData) {
    ws.send(JSON.stringify({
      type: 'stream_chunk',
      chunk: 'Cargando información del examen...',
      progress: 15
    }));
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  // Procesar instrucción
  ws.send(JSON.stringify({
    type: 'stream_chunk',
    chunk: isCodeRequest ? 'Generando código de ejemplo...' : 'Procesando tu instrucción...',
    progress: 30
  }));
  await new Promise(resolve => setTimeout(resolve, 300));

  // Obtener resultado (el lenguaje ya se obtuvo en handleProcessRequest)
  const result = await processInstruction(instruction, examData, examId, data.language || 'javascript');
  
  // Si es solicitud de código o problema de algoritmo, enviar incrementalmente
  if ((isCodeRequest || isAlgorithmProblem) && result.incremental) {
    await sendCodeIncrementally(ws, result, examData, language);
  } else {
    // Generar respuesta normal
    ws.send(JSON.stringify({
      type: 'stream_chunk',
      chunk: 'Generando respuesta...',
      progress: 60
    }));
    await new Promise(resolve => setTimeout(resolve, 300));

    // Enviar respuesta en partes si es larga
    if (result.answer && result.answer.length > 200) {
      const parts = splitLongText(result.answer, 200);
      for (let i = 0; i < parts.length; i++) {
        ws.send(JSON.stringify({
          type: 'stream_chunk',
          chunk: parts[i],
          progress: 60 + (i + 1) * (35 / parts.length)
        }));
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } else if (result.answer) {
      ws.send(JSON.stringify({
        type: 'stream_chunk',
        chunk: result.answer,
        progress: 95
      }));
    }
  }

  // Enviar resultado final completo
  ws.send(JSON.stringify({
    type: 'stream_result',
    result: result
  }));
}

async function sendCodeIncrementally(ws, result, examData) {
  // Enviar código por partes incrementales
  const codeParts = result.codeParts || [];
  
  if (codeParts.length > 0) {
    ws.send(JSON.stringify({
      type: 'stream_chunk',
      chunk: `📝 Generando código en ${codeParts.length} partes...\n`,
      progress: 40
    }));
    await new Promise(resolve => setTimeout(resolve, 300));

    for (let i = 0; i < codeParts.length; i++) {
      const part = codeParts[i];
      
      // Enviar encabezado de la parte
      ws.send(JSON.stringify({
        type: 'stream_chunk',
        chunk: `\n${'='.repeat(50)}\n📦 Parte ${i + 1}/${codeParts.length}: ${part.title}\n${'='.repeat(50)}\n\n`,
        progress: 40 + (i * 50 / codeParts.length)
      }));
      await new Promise(resolve => setTimeout(resolve, 300));

      // Enviar código de la parte
      if (part.code) {
        const codeLines = part.code.split('\n');
        const chunkSize = 10; // Enviar 10 líneas a la vez
        
        for (let j = 0; j < codeLines.length; j += chunkSize) {
          const chunk = codeLines.slice(j, j + chunkSize).join('\n');
          ws.send(JSON.stringify({
            type: 'stream_chunk',
            chunk: chunk + '\n',
            progress: 40 + ((i + 1) * 50 / codeParts.length)
          }));
          await new Promise(resolve => setTimeout(resolve, 150));
        }
      }

      // Enviar explicación si existe
      if (part.explanation) {
        ws.send(JSON.stringify({
          type: 'stream_chunk',
          chunk: `\n💡 ${part.explanation}\n`,
          progress: 40 + ((i + 1) * 50 / codeParts.length)
        }));
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
  } else if (result.answer) {
    // Si no hay partes, enviar respuesta normal
    ws.send(JSON.stringify({
      type: 'stream_chunk',
      chunk: result.answer,
      progress: 90
    }));
  }
}

function splitLongText(text, maxLength) {
  const parts = [];
  let currentPart = '';
  const sentences = text.split(/[.!?]\s+/);
  
  for (const sentence of sentences) {
    if ((currentPart + sentence).length > maxLength && currentPart) {
      parts.push(currentPart.trim());
      currentPart = sentence + '. ';
    } else {
      currentPart += sentence + '. ';
    }
  }
  
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }
  
  return parts;
}

// ============================================
// Response Generators
// ============================================

function generateStrategyResponse(instruction, config, info) {
  let response = `Estrategia para ${info.name}:\n\n`;
  
  if (config.scenarios) {
    response += `Este examen tiene ${config.scenarios.length} escenarios:\n\n`;
    
    config.scenarios.forEach((scenario, index) => {
      response += `**Escenario ${scenario.id}: ${scenario.title}**\n`;
      response += `- Tiempo: ${scenario.timeLimit} minutos\n`;
      response += `- Tipo: ${scenario.type}\n`;
      
      if (scenario.strategy && scenario.strategy.length > 0) {
        response += `\nFases de la estrategia:\n`;
        scenario.strategy.forEach((phase, phaseIndex) => {
          response += `${phaseIndex + 1}. ${phase.phase} (${phase.duration} min)\n`;
          if (phase.tasks && phase.tasks.length > 0) {
            phase.tasks.forEach(task => {
              response += `   - ${task}\n`;
            });
          }
        });
      }
      
      if (scenario.keyPoints && scenario.keyPoints.length > 0) {
        response += `\nPuntos clave:\n`;
        scenario.keyPoints.forEach(point => {
          response += `- ${point}\n`;
        });
      }
      
      response += `\n`;
    });
  }
  
  return response;
}

function generateScenarioResponse(instruction, config) {
  if (!config.scenarios || config.scenarios.length === 0) {
    return 'No hay escenarios disponibles en este examen.';
  }
  
  // Intentar identificar qué escenario específico
  const instructionLower = instruction.toLowerCase();
  let targetScenario = null;
  
  if (instructionLower.includes('1') || instructionLower.includes('uno') || instructionLower.includes('primero')) {
    targetScenario = config.scenarios.find(s => s.id === 1);
  } else if (instructionLower.includes('2') || instructionLower.includes('dos') || instructionLower.includes('segundo')) {
    targetScenario = config.scenarios.find(s => s.id === 2);
  } else if (instructionLower.includes('3') || instructionLower.includes('tres') || instructionLower.includes('tercero')) {
    targetScenario = config.scenarios.find(s => s.id === 3);
  }
  
  if (targetScenario) {
    let response = `**Escenario ${targetScenario.id}: ${targetScenario.title}**\n\n`;
    response += `**Descripción:**\n${targetScenario.description}\n\n`;
    
    if (targetScenario.objectives && targetScenario.objectives.length > 0) {
      response += `**Objetivos:**\n`;
      targetScenario.objectives.forEach((obj, i) => {
        response += `${i + 1}. ${obj}\n`;
      });
      response += `\n`;
    }
    
    if (targetScenario.strategy && targetScenario.strategy.length > 0) {
      response += `**Estrategia:**\n`;
      targetScenario.strategy.forEach((phase, i) => {
        response += `\nFase ${i + 1}: ${phase.phase} (${phase.duration} minutos)\n`;
        if (phase.tasks && phase.tasks.length > 0) {
          phase.tasks.forEach(task => {
            response += `  • ${task}\n`;
          });
        }
      });
    }
    
    return response;
  }
  
  // Si no se especifica, mostrar todos
  return generateStrategyResponse(instruction, config, { name: 'el examen' });
}

function generateTimeResponse(instruction, config) {
  let response = 'Información de tiempo:\n\n';
  
  if (config.timeConfig) {
    response += `**Tiempo total:** ${Math.floor(config.timeConfig.totalTime / 60)} minutos (${config.timeConfig.totalTime} segundos)\n\n`;
    
    if (config.timeConfig.segments && config.timeConfig.segments.length > 0) {
      response += `**Segmentos de tiempo:**\n`;
      config.timeConfig.segments.forEach(segment => {
        response += `- ${segment.label}: ${Math.floor(segment.duration / 60)} minutos\n`;
        response += `  ${segment.description}\n`;
      });
    }
  }
  
  if (config.scenarios) {
    response += `\n**Tiempos por escenario:**\n`;
    config.scenarios.forEach(scenario => {
      response += `- Escenario ${scenario.id}: ${scenario.timeLimit} minutos\n`;
    });
  }
  
  return response;
}

function generateConceptsResponse(instruction, config) {
  if (!config.scenarios) {
    return 'No hay conceptos disponibles.';
  }
  
  let response = 'Conceptos clave:\n\n';
  const allConcepts = new Set();
  
  config.scenarios.forEach(scenario => {
    if (scenario.concepts) {
      scenario.concepts.forEach(concept => allConcepts.add(concept));
    }
  });
  
  if (allConcepts.size > 0) {
    Array.from(allConcepts).forEach((concept, i) => {
      response += `${i + 1}. ${concept}\n`;
    });
  } else {
    response += 'No se especificaron conceptos específicos en los escenarios.';
  }
  
  return response;
}

function generateObjectivesResponse(instruction, config) {
  if (!config.scenarios) {
    return 'No hay objetivos disponibles.';
  }
  
  let response = 'Objetivos por escenario:\n\n';
  
  config.scenarios.forEach(scenario => {
    response += `**Escenario ${scenario.id}: ${scenario.title}**\n`;
    if (scenario.objectives && scenario.objectives.length > 0) {
      scenario.objectives.forEach((obj, i) => {
        response += `${i + 1}. ${obj}\n`;
      });
    } else {
      response += 'No hay objetivos específicos.\n';
    }
    response += `\n`;
  });
  
  return response;
}

function generatePhasesResponse(instruction, config) {
  if (!config.scenarios) {
    return 'No hay fases disponibles.';
  }
  
  let response = 'Fases de estrategia:\n\n';
  
  config.scenarios.forEach(scenario => {
    response += `**Escenario ${scenario.id}: ${scenario.title}**\n`;
    if (scenario.strategy && scenario.strategy.length > 0) {
      scenario.strategy.forEach((phase, i) => {
        response += `\nFase ${i + 1}: ${phase.phase}\n`;
        response += `- Duración: ${phase.duration} minutos\n`;
        if (phase.tasks && phase.tasks.length > 0) {
          response += `- Tareas:\n`;
          phase.tasks.forEach(task => {
            response += `  • ${task}\n`;
          });
        }
      });
    } else {
      response += 'No hay fases de estrategia definidas.\n';
    }
    response += `\n`;
  });
  
  return response;
}

function generateAlgorithmCode(instruction, config, info, language = 'javascript') {
  // Generar código para problemas de algoritmos por versiones
  let response = '';
  let codeParts = [];
  
  // Extraer información del problema
  const problemMatch = instruction.match(/(\d+)\.\s*(.+?)(?:\n|Hard|Medium|Easy)/);
  const problemNumber = problemMatch ? problemMatch[1] : null;
  const problemTitle = problemMatch ? problemMatch[2].trim() : 'Algorithm Problem';
  
  // Extraer ejemplos
  const example1Match = instruction.match(/Example 1:[\s\S]*?Input:\s*n\s*=\s*(\d+)[\s\S]*?Output:\s*(\d+)/);
  const example2Match = instruction.match(/Example 2:[\s\S]*?Input:\s*n\s*=\s*(\d+)[\s\S]*?Output:\s*(\d+)/);
  
  // Detectar tipo de problema
  const instructionLower = instruction.toLowerCase();
  let problemType = 'general';
  if (instructionLower.includes('grid') && instructionLower.includes('paint')) {
    problemType = 'grid-coloring';
  } else if (instructionLower.includes('dynamic programming') || instructionLower.includes('dp')) {
    problemType = 'dp';
  }
  
  // Obtener nombre del lenguaje
  const languageNames = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'python': 'Python',
    'java': 'Java',
    'php': 'PHP',
    'cpp': 'C++',
    'csharp': 'C#',
    'go': 'Go',
    'rust': 'Rust'
  };
  const languageName = languageNames[language] || 'JavaScript';
  
  response = `Solución para: **${problemTitle}**\n\n`;
  response += `Problema #${problemNumber || 'N/A'}\n`;
  response += `Lenguaje: **${languageName}**\n\n`;
  response += `Generando código por versiones (v1, v2, v3) con tests...\n\n`;
  
  // Generar versiones del código en el lenguaje seleccionado
  if (problemType === 'grid-coloring') {
    codeParts = generateGridColoringVersions(instruction, example1Match, example2Match, language);
  } else {
    codeParts = generateGenericAlgorithmVersions(instruction, problemTitle, language);
  }
  
  return { answer: response, codeParts: codeParts };
}

function generateGridColoringVersions(instruction, example1, example2, language = 'javascript') {
  const parts = [];
  const example1Input = example1 ? parseInt(example1[1]) : 1;
  const example1Output = example1 ? parseInt(example1[2]) : 12;
  const example2Input = example2 ? parseInt(example2[1]) : 5000;
  const example2Output = example2 ? parseInt(example2[2]) : 30228214;
  
  // Generar código según el lenguaje
  const codeGenerator = getCodeGenerator(language);
  
  // Versión 1: Solución básica con backtracking
  parts.push({
    title: 'Versión 1: Solución Básica con Backtracking',
    code: codeGenerator.v1(example1Input, example1Output, example2Input, example2Output),
    explanation: 'Versión básica usando backtracking. Funciona pero es lenta para n grandes (O(3^n)). Solo útil para n pequeños.'
  });
  
  // Versión 2: Optimización con memoización
  parts.push({
    title: 'Versión 2: Optimización con Memoización',
    code: codeGenerator.v2(example1Input, example1Output, example2Input, example2Output),
    explanation: 'Versión optimizada con memoización. Reduce la complejidad a O(n) usando patrones válidos pre-calculados. Funciona para n grandes.'
  });
  
  // Versión 3: Solución final optimizada
  parts.push({
    title: 'Versión 3: Solución Final Optimizada (DP)',
    code: codeGenerator.v3(example1Input, example1Output, example2Input, example2Output),
    explanation: 'Solución final optimizada usando Dynamic Programming. Identifica dos tipos de patrones y calcula transiciones entre ellos. O(n) tiempo, O(1) espacio. La más eficiente.'
  });
  
  // Tests
  parts.push({
    title: 'Tests para todas las versiones',
    code: codeGenerator.tests(example1Input, example1Output, example2Input, example2Output),
    explanation: 'Tests completos para todas las versiones. Incluye casos pequeños y grandes, medición de tiempo, y comparación de performance.'
  });
  
  return parts;
}

function generateGenericAlgorithmVersions(instruction, problemTitle, language = 'javascript') {
  const parts = [];
  
  // Versión 1: Solución básica
  parts.push({
    title: 'Versión 1: Solución Básica',
    code: `// Solution v1: Basic Approach
// Analiza el problema y proporciona una solución inicial

function solve(input) {
  // TODO: Implementar solución básica
  // Esta es la primera aproximación al problema
  
  return 0;
}`,
    explanation: 'Primera versión: solución básica que resuelve el problema de forma directa.'
  });
  
  // Versión 2: Optimización
  parts.push({
    title: 'Versión 2: Optimización',
    code: `// Solution v2: Optimized Approach
// Mejora la complejidad temporal o espacial

function solve(input) {
  // TODO: Implementar solución optimizada
  // Mejora sobre la versión 1
  
  return 0;
}`,
    explanation: 'Segunda versión: optimización de la solución básica.'
  });
  
  // Tests
  parts.push({
    title: 'Tests',
    code: `// tests.js
function testSolution(solutionFn) {
  // TODO: Agregar casos de prueba basados en los ejemplos del problema
  console.log('Testing...');
}`,
    explanation: 'Tests para validar las soluciones.'
  });
  
  return parts;
}

function generateCodeResponse(instruction, config, info) {
  const instructionLower = instruction.toLowerCase();
  let response = '';
  let codeParts = [];
  
  // Identificar qué escenario o qué tipo de código
  let targetScenario = null;
  let scenarioId = null;
  
  // Intentar extraer información del escenario de la instrucción
  if (instruction.includes('**Título:**')) {
    // La instrucción contiene información completa del escenario
    const titleMatch = instruction.match(/\*\*Título:\*\* (.+)/);
    const typeMatch = instruction.match(/\*\*Tipo:\*\* (.+)/);
    
    if (titleMatch && config.scenarios) {
      const title = titleMatch[1].trim();
      targetScenario = config.scenarios.find(s => 
        s.title.toLowerCase().includes(title.toLowerCase()) || 
        title.toLowerCase().includes(s.title.toLowerCase())
      );
    }
    
    if (!targetScenario && typeMatch && config.scenarios) {
      const type = typeMatch[1].trim().toLowerCase();
      // Buscar por tipo
      if (type.includes('coding') || type.includes('código')) {
        targetScenario = config.scenarios.find(s => s.type === 'coding' || s.id === 2);
      } else if (type.includes('analysis') || type.includes('análisis')) {
        targetScenario = config.scenarios.find(s => s.type === 'analysis' || s.id === 1);
      } else if (type.includes('documentation') || type.includes('documentación')) {
        targetScenario = config.scenarios.find(s => s.type === 'documentation' || s.id === 3);
      }
    }
  }
  
  // Si no se encontró por título, buscar por palabras clave
  if (!targetScenario) {
    if (instructionLower.includes('escenario 1') || instructionLower.includes('scenario 1') || 
        instructionLower.includes('debugging') || instructionLower.includes('debug')) {
      scenarioId = 1;
    } else if (instructionLower.includes('escenario 2') || instructionLower.includes('scenario 2') || 
               instructionLower.includes('autorización') || instructionLower.includes('authorization') ||
               instructionLower.includes('permisos') || instructionLower.includes('permissions') ||
               instructionLower.includes('pages users are authorized')) {
      scenarioId = 2;
    } else if (instructionLower.includes('escenario 3') || instructionLower.includes('scenario 3') || 
               instructionLower.includes('deployment') || instructionLower.includes('despliegue') ||
               instructionLower.includes('spa with cloud')) {
      scenarioId = 3;
    }
    
    if (scenarioId && config.scenarios) {
      targetScenario = config.scenarios.find(s => s.id === scenarioId);
    }
  }
  
  if (targetScenario) {
    response = `Código de ejemplo para: **${targetScenario.title}**\n\n`;
    response += `Este escenario es de tipo: **${targetScenario.type}**\n\n`;
    
    // Generar código según el tipo de escenario
    if (targetScenario.type === 'coding' || targetScenario.id === 2) {
      // Escenario 2: Autorización
      codeParts = generateAuthorizationCode(targetScenario);
    } else if (targetScenario.type === 'analysis' || targetScenario.id === 1) {
      // Escenario 1: Debugging - código de ejemplo para documentación
      codeParts = generateDebuggingCode(targetScenario);
    } else if (targetScenario.type === 'documentation' || targetScenario.id === 3) {
      // Escenario 3: Deployment - código de ejemplo para scripts
      codeParts = generateDeploymentCode(targetScenario);
    }
    
    response += `El código se mostrará en ${codeParts.length} partes incrementales.\n\n`;
  } else {
    // Si no se especifica escenario, mostrar opciones
    response = `Para generar código, especifica el escenario:\n\n`;
    if (config.scenarios) {
      config.scenarios.forEach(scenario => {
        response += `- **Escenario ${scenario.id}**: "${scenario.title}" (tipo: ${scenario.type})\n`;
        response += `  Ejemplo: "dame el código del escenario ${scenario.id}"\n\n`;
      });
    }
  }
  
  return { answer: response, codeParts: codeParts };
}

function generateAuthorizationCode(scenario) {
  const parts = [];
  
  // Parte 1: Estructura de datos y tipos
  parts.push({
    title: '1. Estructura de Datos y Tipos',
    code: `// types.ts
export interface User {
  id: string;
  email: string;
  role: string;
  permissions: string[];
}

export interface Page {
  id: string;
  path: string;
  requiredPermission: string;
}

export interface AuthorizationResult {
  authorized: boolean;
  reason?: string;
}`,
    explanation: 'Definimos las interfaces básicas para usuarios, páginas y resultados de autorización.'
  });
  
  // Parte 2: Función de verificación
  parts.push({
    title: '2. Función de Verificación de Autorización',
    code: `// authorization.ts
import { User, Page, AuthorizationResult } from './types';

export function isUserAuthorized(user: User, page: Page): AuthorizationResult {
  // Caso edge: Usuario sin permisos
  if (!user.permissions || user.permissions.length === 0) {
    return {
      authorized: false,
      reason: 'User has no permissions assigned'
    };
  }
  
  // Caso edge: Página sin permiso requerido
  if (!page.requiredPermission) {
    return {
      authorized: false,
      reason: 'Page does not have a required permission defined'
    };
  }
  
  // Verificar si el usuario tiene el permiso requerido
  const hasPermission = user.permissions.includes(page.requiredPermission);
  
  // Verificar por rol (si el permiso es específico de rol)
  const hasRolePermission = checkRolePermission(user.role, page.requiredPermission);
  
  return {
    authorized: hasPermission || hasRolePermission,
    reason: hasPermission || hasRolePermission 
      ? 'User has required permission' 
      : 'User does not have required permission'
  };
}

function checkRolePermission(role: string, permission: string): boolean {
  // Mapeo de roles a permisos
  const rolePermissions: Record<string, string[]> = {
    'admin': ['*'], // Admin tiene todos los permisos
    'editor': ['read', 'write', 'edit'],
    'viewer': ['read']
  };
  
  const permissions = rolePermissions[role] || [];
  return permissions.includes('*') || permissions.includes(permission);
}`,
    explanation: 'Función principal que verifica si un usuario puede acceder a una página. Maneja casos edge.'
  });
  
  // Parte 3: Función para múltiples páginas
  parts.push({
    title: '3. Verificar Múltiples Páginas',
    code: `// authorization.ts (continuación)

export function getAuthorizedPages(user: User, pages: Page[]): Page[] {
  return pages.filter(page => {
    const result = isUserAuthorized(user, page);
    return result.authorized;
  });
}

export function getUnauthorizedPages(user: User, pages: Page[]): Page[] {
  return pages.filter(page => {
    const result = isUserAuthorized(user, page);
    return !result.authorized;
  });
}`,
    explanation: 'Funciones auxiliares para obtener listas de páginas autorizadas o no autorizadas.'
  });
  
  // Parte 4: Tests
  parts.push({
    title: '4. Tests',
    code: `// authorization.test.ts
import { isUserAuthorized, getAuthorizedPages } from './authorization';
import { User, Page } from './types';

describe('Authorization', () => {
  const testUser: User = {
    id: '1',
    email: 'test@example.com',
    role: 'editor',
    permissions: ['read', 'write']
  };
  
  const testPage: Page = {
    id: '1',
    path: '/dashboard',
    requiredPermission: 'read'
  };
  
  test('user with permission can access page', () => {
    const result = isUserAuthorized(testUser, testPage);
    expect(result.authorized).toBe(true);
  });
  
  test('user without permission cannot access page', () => {
    const userWithoutPermission: User = {
      ...testUser,
      permissions: ['write'] // No tiene 'read'
    };
    const result = isUserAuthorized(userWithoutPermission, testPage);
    expect(result.authorized).toBe(false);
  });
  
  test('user with no permissions cannot access any page', () => {
    const userNoPermissions: User = {
      ...testUser,
      permissions: []
    };
    const result = isUserAuthorized(userNoPermissions, testPage);
    expect(result.authorized).toBe(false);
    expect(result.reason).toContain('no permissions');
  });
  
  test('getAuthorizedPages returns only authorized pages', () => {
    const pages: Page[] = [
      { id: '1', path: '/dashboard', requiredPermission: 'read' },
      { id: '2', path: '/admin', requiredPermission: 'admin' },
      { id: '3', path: '/public', requiredPermission: 'read' }
    ];
    
    const authorized = getAuthorizedPages(testUser, pages);
    expect(authorized.length).toBe(2); // Solo las que requieren 'read'
  });
});`,
    explanation: 'Tests completos que cubren casos normales y casos edge.'
  });
  
  return parts;
}

function generateDebuggingCode(scenario) {
  const parts = [];
  
  parts.push({
    title: '1. Template de Documentación de Debugging',
    code: `# Bug Report Analysis

## Información Disponible
- **Bug ID**: [ID del bug]
- **Reportado por**: [Usuario/Equipo]
- **Fecha**: [Fecha]
- **Severidad**: [Critical/High/Medium/Low]

## Información que Tengo
- [Lista de información disponible]
- [Logs disponibles]
- [Stack traces]
- [Pasos para reproducir]

## Información que Falta
- [ ] [Información faltante 1]
- [ ] [Información faltante 2]
- [ ] [Información faltante 3]

## Hipótesis
1. [Hipótesis 1]
2. [Hipótesis 2]
3. [Hipótesis 3]

## Plan de Investigación
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]`,
    explanation: 'Template para documentar el proceso de debugging.'
  });
  
  parts.push({
    title: '2. Script de Análisis de Logs',
    code: `// analyze-logs.js
const fs = require('fs');
const readline = require('readline');

async function analyzeLogs(logFilePath) {
  const fileStream = fs.createReadStream(logFilePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  const errorCounts = {};
  const stackTraces = [];
  
  for await (const line of rl) {
    // Buscar errores
    if (line.includes('ERROR') || line.includes('Exception')) {
      const errorType = extractErrorType(line);
      errorCounts[errorType] = (errorCounts[errorType] || 0) + 1;
    }
    
    // Capturar stack traces
    if (line.includes('at ') || line.includes('Stack:')) {
      stackTraces.push(line);
    }
  }
  
  return {
    errorCounts,
    stackTraces: stackTraces.slice(0, 10), // Primeros 10
    totalErrors: Object.values(errorCounts).reduce((a, b) => a + b, 0)
  };
}

function extractErrorType(line) {
  // Extraer tipo de error de la línea
  const match = line.match(/(\\w+Error|\\w+Exception)/);
  return match ? match[0] : 'Unknown';
}

// Uso
analyzeLogs('app.log').then(result => {
  console.log('Análisis de logs:', JSON.stringify(result, null, 2));
});`,
    explanation: 'Script de ejemplo para analizar logs y extraer información útil.'
  });
  
  return parts;
}

function generateDeploymentCode(scenario) {
  const parts = [];
  
  parts.push({
    title: '1. Script de Build',
    code: `#!/bin/bash
# build.sh - Script de build para SPA

echo "🔨 Iniciando build..."

# Instalar dependencias
npm install

# Build de producción
npm run build

# Verificar que el build fue exitoso
if [ $? -eq 0 ]; then
  echo "✅ Build completado exitosamente"
  echo "📦 Archivos generados en: dist/"
else
  echo "❌ Error en el build"
  exit 1
fi`,
    explanation: 'Script básico para construir la aplicación.'
  });
  
  parts.push({
    title: '2. Configuración de CI/CD (GitHub Actions)',
    code: `# .github/workflows/deploy.yml
name: Deploy SPA

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to S3
      env:
        AWS_ACCESS_KEY_ID: \$\{\{ secrets.AWS_ACCESS_KEY_ID \}\}
        AWS_SECRET_ACCESS_KEY: \$\{\{ secrets.AWS_SECRET_ACCESS_KEY \}\}
      run: |
        aws s3 sync dist/ s3://my-spa-bucket --delete
    
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation \\
          --distribution-id \$\{\{ secrets.CLOUDFRONT_DIST_ID \}\} \\
          --paths "/*"`,
    explanation: 'Configuración de CI/CD para automatizar el despliegue.'
  });
  
  parts.push({
    title: '3. Configuración de Cloud (Terraform)',
    code: `# terraform/main.tf
resource "aws_s3_bucket" "spa_bucket" {
  bucket = "my-spa-app-\${var.environment}"
  
  website {
    index_document = "index.html"
    error_document = "index.html" # Para SPA routing
  }
}

resource "aws_cloudfront_distribution" "spa_distribution" {
  origin {
    domain_name = aws_s3_bucket.spa_bucket.bucket_regional_domain_name
    origin_id   = "S3-\${aws_s3_bucket.spa_bucket.id}"
  }
  
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  
  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-\${aws_s3_bucket.spa_bucket.id}"
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
  
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  viewer_certificate {
    cloudfront_default_certificate = true
  }
}`,
    explanation: 'Configuración de infraestructura con Terraform para AWS.'
  });
  
  return parts;
}

function generateGeneralResponse(instruction, config, info) {
  let response = `Información sobre ${info.name}:\n\n`;
  response += `${info.description}\n\n`;
  
  if (config.instructions) {
    response += `**Instrucciones:**\n${config.instructions}\n\n`;
  }
  
  if (config.scenarios) {
    response += `Este examen incluye ${config.scenarios.length} escenario(s) técnico(s).\n`;
    response += `Puedes preguntar sobre estrategias, objetivos, conceptos, tiempos o código específico.\n\n`;
    response += `💡 **Tip**: Pregunta "dame el código del escenario X" para ver código de ejemplo.\n`;
    response += `💡 **Tip**: Pregunta "muéstrame el código paso a paso" para verlo incrementalmente.\n`;
  }
  
  return response;
}

function extractStrategyDetails(config) {
  if (!config.scenarios) return {};
  return {
    totalScenarios: config.scenarios.length,
    scenarios: config.scenarios.map(s => ({
      id: s.id,
      title: s.title,
      timeLimit: s.timeLimit,
      phases: s.strategy ? s.strategy.length : 0
    }))
  };
}

function extractScenarioDetails(config, instruction) {
  const instructionLower = instruction.toLowerCase();
  let scenarioId = null;
  
  if (instructionLower.includes('1') || instructionLower.includes('uno')) scenarioId = 1;
  else if (instructionLower.includes('2') || instructionLower.includes('dos')) scenarioId = 2;
  else if (instructionLower.includes('3') || instructionLower.includes('tres')) scenarioId = 3;
  
  if (scenarioId && config.scenarios) {
    const scenario = config.scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      return {
        scenario: {
          id: scenario.id,
          title: scenario.title,
          description: scenario.description,
          objectives: scenario.objectives,
          strategy: scenario.strategy
        }
      };
    }
  }
  
  return {};
}

function extractTimeDetails(config) {
  return {
    totalTime: config.timeConfig ? config.timeConfig.totalTime : null,
    segments: config.timeConfig ? config.timeConfig.segments : [],
    scenarioTimes: config.scenarios ? config.scenarios.map(s => ({
      id: s.id,
      timeLimit: s.timeLimit
    })) : []
  };
}

function extractConcepts(config) {
  const concepts = new Set();
  if (config.scenarios) {
    config.scenarios.forEach(scenario => {
      if (scenario.concepts) {
        scenario.concepts.forEach(c => concepts.add(c));
      }
    });
  }
  return { concepts: Array.from(concepts) };
}

function extractObjectives(config) {
  if (!config.scenarios) return {};
  return {
    objectives: config.scenarios.map(s => ({
      scenarioId: s.id,
      title: s.title,
      objectives: s.objectives || []
    }))
  };
}

function extractPhases(config) {
  if (!config.scenarios) return {};
  return {
    phases: config.scenarios.map(s => ({
      scenarioId: s.id,
      title: s.title,
      strategy: s.strategy || []
    }))
  };
}

function extractCodeDetails(config, instruction) {
  const instructionLower = instruction.toLowerCase();
  let scenarioId = null;
  
  if (instructionLower.includes('escenario 1') || instructionLower.includes('scenario 1')) scenarioId = 1;
  else if (instructionLower.includes('escenario 2') || instructionLower.includes('scenario 2')) scenarioId = 2;
  else if (instructionLower.includes('escenario 3') || instructionLower.includes('scenario 3')) scenarioId = 3;
  
  if (scenarioId && config.scenarios) {
    const scenario = config.scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      return {
        scenarioId: scenario.id,
        scenarioType: scenario.type,
        codeParts: scenario.type === 'coding' ? 4 : scenario.type === 'analysis' ? 2 : 3
      };
    }
  }
  
  return {};
}

function generateSuggestions(instruction, examConfig) {
  const suggestions = [];
  const instructionLower = instruction.toLowerCase();
  
  if (examConfig.scenarios) {
    suggestions.push(`Este examen tiene ${examConfig.scenarios.length} escenario(s)`);
    
    if (instructionLower.includes('estrategia') || instructionLower.includes('strategy')) {
      suggestions.push('Cada escenario tiene fases de estrategia detalladas');
      suggestions.push('Revisa los tiempos asignados a cada fase');
    }
    
    if (instructionLower.includes('tiempo') || instructionLower.includes('time')) {
      examConfig.scenarios.forEach(scenario => {
        suggestions.push(`Escenario ${scenario.id}: ${scenario.timeLimit} minutos`);
      });
    }
  }
  
  return suggestions;
}

function generateGeneralSuggestions(instruction) {
  return [
    'Review the exam structure',
    'Check the time configuration',
    'Read the instructions carefully'
  ];
}

function generateClientId() {
  return `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// ============================================
// Start Servers
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 Bridge Server (REST API) running on http://localhost:${PORT}`);
  console.log(`📡 WebSocket Server running on ws://localhost:${WS_PORT}`);
  console.log(`📁 Assets path: ${ASSETS_PATH}`);
});
