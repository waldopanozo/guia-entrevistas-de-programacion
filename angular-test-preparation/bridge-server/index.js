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

    // Procesar instrucción
    if (stream) {
      // Procesar y enviar en chunks (simulado)
      await processInstructionStream(ws, instruction, examData, examId);
    } else {
      // Procesar y enviar resultado completo
      const result = await processInstruction(instruction, examData, examId);
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

async function processInstruction(instruction, examData, examId) {
  // Simular procesamiento de instrucción
  // En una implementación real, esto se comunicaría con Cursor via MCP
  
  let response = {
    instruction: instruction,
    examId: examId || null,
    processed: true,
    suggestions: []
  };

  if (examData) {
    // Procesar basándose en los datos del examen
    response.examInfo = examData.info;
    response.suggestions = generateSuggestions(instruction, examData.config);
  } else {
    // Procesamiento general
    response.suggestions = generateGeneralSuggestions(instruction);
  }

  return response;
}

async function processInstructionStream(ws, instruction, examData, examId) {
  // Simular procesamiento en stream
  const chunks = [
    'Analyzing your request...',
    'Loading exam data...',
    'Processing instructions...',
    'Generating response...'
  ];

  for (let i = 0; i < chunks.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    ws.send(JSON.stringify({
      type: 'stream_chunk',
      chunk: chunks[i],
      progress: ((i + 1) / chunks.length) * 100
    }));
  }

  // Enviar resultado final
  const result = await processInstruction(instruction, examData, examId);
  ws.send(JSON.stringify({
    type: 'stream_result',
    result: result
  }));
}

function generateSuggestions(instruction, examConfig) {
  const suggestions = [];
  
  // Analizar la instrucción y generar sugerencias basadas en el examen
  if (instruction.toLowerCase().includes('strategy') || instruction.toLowerCase().includes('estrategia')) {
    if (examConfig.scenarios) {
      suggestions.push('Review the strategy phases for each scenario');
      suggestions.push('Follow the time limits for each phase');
    }
  }
  
  if (instruction.toLowerCase().includes('time') || instruction.toLowerCase().includes('tiempo')) {
    if (examConfig.timeConfig) {
      suggestions.push(`Total time: ${examConfig.timeConfig.totalTime} seconds`);
      suggestions.push('Manage your time according to the segments');
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
