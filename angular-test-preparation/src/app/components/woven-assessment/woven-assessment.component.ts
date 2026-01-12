import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { CursorBridgeService, ProcessResponse } from '../../services/cursor-bridge.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface WovenScenario {
  id: number;
  title: string;
  timeLimit: number;
  type: string;
  description: string;
  objectives: string[];
  strategy: StrategyPhase[];
  keyPoints: string[];
  concepts?: string[];
  areas?: Area[];
}

interface StrategyPhase {
  phase: string;
  duration: number;
  tasks: string[];
}

interface Area {
  name: string;
  details: string[];
}

interface WovenConfig {
  examType: string;
  name: string;
  description: string;
  timeConfig: any;
  instructions: string;
  scenarios: WovenScenario[];
  codeOfConduct: {
    allowed: string[];
    notAllowed: string[];
  };
  preparation: {
    beforeStart: string[];
    checklist: string[];
  };
  tips: string[];
}

@Component({
  selector: 'app-woven-assessment',
  templateUrl: './woven-assessment.component.html',
  styleUrls: ['./woven-assessment.component.css']
})
export class WovenAssessmentComponent implements OnInit, OnDestroy {
  config: WovenConfig | null = null;
  selectedScenario: WovenScenario | null = null;
  scenarioTimers: Map<number, { running: boolean; remaining: number; interval: any }> = new Map();

  // Cursor Bridge properties
  showCursorPanel = false;
  cursorInstruction = '';
  selectedLanguage = 'javascript'; // Lenguaje por defecto
  availableLanguages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'php', label: 'PHP' },
    { value: 'cpp', label: 'C++' },
    { value: 'csharp', label: 'C#' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' }
  ];
  cursorResponses: ProcessResponse[] = [];
  isProcessing = false;
  connectionStatus = false;
  private cursorSubscriptions: Subscription[] = [];
  
  // Agrupación de código
  private currentCodePart: { title: string; code: string; explanation: string } | null = null;
  private codeParts: Array<{ title: string; code: string; explanation: string }> = [];

  constructor(
    private http: HttpClient,
    private questionsService: QuestionsService,
    private cursorBridge: CursorBridgeService
  ) {}

  ngOnInit() {
    this.loadWovenConfig();
    this.setupCursorBridge();
  }

  ngOnDestroy() {
    this.stopAllTimers();
    this.cursorSubscriptions.forEach(sub => sub.unsubscribe());
  }

  setupCursorBridge() {
    // Suscribirse al estado de conexión
    this.cursorBridge.connectionStatus$.subscribe(status => {
      this.connectionStatus = status;
    });

    // Suscribirse a mensajes del bridge
    const messagesSub = this.cursorBridge.messages$.subscribe(message => {
      this.handleCursorMessage(message);
    });
    this.cursorSubscriptions.push(messagesSub);

    // Suscribirse a datos de examen
    const examDataSub = this.cursorBridge.examData$.subscribe(data => {
      console.log('Exam data received:', data);
    });
    this.cursorSubscriptions.push(examDataSub);
  }

  loadWovenConfig() {
    this.questionsService.loadExam('woven').subscribe(
      (config: any) => {
        this.config = config;
        // Inicializar timers para cada escenario
        if (this.config && this.config.scenarios) {
          this.config.scenarios.forEach(scenario => {
            this.scenarioTimers.set(scenario.id, {
              running: false,
              remaining: scenario.timeLimit * 60, // Convertir minutos a segundos
              interval: null
            });
          });
        }
      },
      error => {
        console.error('Error loading Woven config:', error);
      }
    );
  }

  selectScenario(scenario: WovenScenario) {
    this.selectedScenario = scenario;
  }

  startTimer(scenarioId: number) {
    const timer = this.scenarioTimers.get(scenarioId);
    if (!timer) return;

    if (timer.running) {
      this.pauseTimer(scenarioId);
      return;
    }

    timer.running = true;
    timer.interval = setInterval(() => {
      timer.remaining--;
      if (timer.remaining <= 0) {
        this.stopTimer(scenarioId);
        alert(`¡Tiempo completado para el escenario ${scenarioId}!`);
      }
    }, 1000);
  }

  pauseTimer(scenarioId: number) {
    const timer = this.scenarioTimers.get(scenarioId);
    if (!timer) return;

    timer.running = false;
    if (timer.interval) {
      clearInterval(timer.interval);
      timer.interval = null;
    }
  }

  stopTimer(scenarioId: number) {
    this.pauseTimer(scenarioId);
    const scenario = this.config?.scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      const timer = this.scenarioTimers.get(scenarioId);
      if (timer) {
        timer.remaining = scenario.timeLimit * 60;
      }
    }
  }

  stopAllTimers() {
    this.scenarioTimers.forEach((timer, scenarioId) => {
      this.pauseTimer(scenarioId);
    });
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  getTimerClass(scenarioId: number): string {
    const timer = this.scenarioTimers.get(scenarioId);
    if (!timer) return '';
    
    if (timer.remaining <= 300) { // 5 minutos
      return 'danger';
    } else if (timer.remaining <= 600) { // 10 minutos
      return 'warning';
    }
    return '';
  }

  getScenarioTypeIcon(type: string): string {
    switch (type) {
      case 'analysis':
        return '🔍';
      case 'coding':
        return '💻';
      case 'documentation':
        return '📝';
      default:
        return '📋';
    }
  }

  getScenarioTypeLabel(type: string): string {
    switch (type) {
      case 'analysis':
        return 'Análisis';
      case 'coding':
        return 'Código';
      case 'documentation':
        return 'Documentación';
      default:
        return 'General';
    }
  }

  backToScenarios() {
    this.selectedScenario = null;
    this.showCursorPanel = false;
    this.cursorResponses = [];
  }

  // ============================================
  // Cursor Bridge Methods
  // ============================================

  toggleCursorPanel() {
    this.showCursorPanel = !this.showCursorPanel;
    if (this.showCursorPanel && !this.connectionStatus) {
      this.cursorBridge.reconnect();
    }
  }

  sendCursorInstruction() {
    if (!this.cursorInstruction.trim()) {
      return;
    }

    this.isProcessing = true;
    this.cursorResponses = [];
    this.codeParts = [];
    this.currentCodePart = null;

    // Agregar mensaje corto de inicio
    const instructionPreview = this.cursorInstruction.length > 80 
      ? this.cursorInstruction.substring(0, 80) + '...' 
      : this.cursorInstruction;
    
    this.cursorResponses.push({
      type: 'processing',
      message: `📤 Procesando: ${instructionPreview}`,
      examId: 'woven'
    });

    // Enviar instrucción
    const instruction = this.cursorInstruction;
    this.cursorInstruction = ''; // Limpiar input

    // Procesar instrucción con lenguaje seleccionado
    const processSub = this.cursorBridge.processInstruction({
      examId: 'woven',
      instruction: instruction,
      language: this.selectedLanguage, // Incluir lenguaje seleccionado
      stream: true
    }).subscribe({
      next: (response) => {
        // Las respuestas se manejan en handleCursorMessage
      },
      error: (error) => {
        console.error('Error processing instruction:', error);
        this.cursorResponses.push({
          type: 'error',
          message: `Error: ${error.message || 'Unknown error'}`
        });
        this.isProcessing = false;
      },
      complete: () => {
        this.isProcessing = false;
      }
    });

    this.cursorSubscriptions.push(processSub);
  }

  handleCursorMessage(message: ProcessResponse) {
    // Filtrar y procesar mensajes según tipo
    
    // 1. Ocultar exam_data completo (solo mostrar resumen)
    if (message.type === 'exam_data' && message.data) {
      return; // No mostrar nada, la información ya está disponible
    }

    // 2. Simplificar mensajes de procesamiento
    if (message.type === 'processing') {
      if (message.message && message.message.length > 150) {
        // Acortar mensajes muy largos
        const shortMessage: ProcessResponse = {
          ...message,
          message: message.message.substring(0, 80) + '...'
        };
        this.cursorResponses.push(shortMessage);
      } else if (message.message && !message.message.includes('Enviando:')) {
        // Solo mostrar si no es el mensaje de "Enviando:" completo
        this.cursorResponses.push(message);
      }
      return;
    }

    // 3. Filtrar chunks de stream - solo mostrar código y explicaciones importantes
    if (message.type === 'stream_chunk' && message.chunk) {
      const chunk = message.chunk.trim();
      
      // Ocultar mensajes de progreso genéricos
      if (chunk.includes('Analizando tu solicitud') ||
          chunk.includes('Cargando información del examen') ||
          chunk.includes('Procesando tu instrucción') ||
          chunk.includes('Generando respuesta') ||
          (chunk.includes('Generando código en') && !chunk.includes('Parte'))) {
        return; // No mostrar estos mensajes
      }
      
      // Mostrar encabezados de partes
      if (chunk.includes('==================================================') && chunk.includes('Parte')) {
        const titleMatch = chunk.match(/Parte \d+\/\d+: (.+)/);
        if (titleMatch) {
          const title = titleMatch[1].trim();
          this.cursorResponses.push({
            ...message,
            chunk: `\n📦 ${title}\n${'='.repeat(60)}\n`
          });
        }
        return;
      }
      
      // Mostrar explicaciones
      if (chunk.includes('💡')) {
        this.cursorResponses.push({
          ...message,
          chunk: chunk
        });
        return;
      }
      
      // Mostrar código (todo lo demás)
      if (chunk.length > 0 && !chunk.includes('Generando')) {
        this.cursorResponses.push(message);
      }
      return;
    }

    // 4. Mostrar otros tipos de mensajes normalmente
    if (message.type === 'stream_result' || 
        message.type === 'result' || 
        message.type === 'complete' || 
        message.type === 'error' ||
        message.type === 'connected') {
      this.cursorResponses.push(message);
    }

    // Marcar como completado
    if (message.type === 'complete' || message.type === 'error') {
      this.isProcessing = false;
    }

    // Scroll al final
    setTimeout(() => {
      const responsesContainer = document.getElementById('cursor-responses');
      if (responsesContainer) {
        responsesContainer.scrollTop = responsesContainer.scrollHeight;
      }
    }, 100);
  }

  getResponseClass(response: ProcessResponse): string {
    switch (response.type) {
      case 'connected':
        return 'response-success';
      case 'processing':
        return 'response-info';
      case 'stream_chunk':
        return 'response-stream';
      case 'result':
      case 'stream_result':
        return 'response-result';
      case 'complete':
        return 'response-success';
      case 'error':
        return 'response-error';
      default:
        return 'response-default';
    }
  }

  getResponseIcon(response: ProcessResponse): string {
    switch (response.type) {
      case 'connected':
        return '✅';
      case 'processing':
        return '⏳';
      case 'stream_chunk':
        return '📝';
      case 'result':
      case 'stream_result':
        return '💡';
      case 'complete':
        return '✅';
      case 'error':
        return '❌';
      default:
        return 'ℹ️';
    }
  }

  askAboutScenario(scenarioId: number) {
    if (!this.selectedScenario) return;

    const scenario = this.selectedScenario;
    this.cursorInstruction = `Muéstrame la estrategia detallada para el escenario "${scenario.title}" paso a paso, incluyendo los conceptos clave y áreas importantes`;
    this.sendCursorInstruction();
  }

  askAboutStrategy() {
    if (!this.selectedScenario) return;

    this.cursorInstruction = `Explícame la estrategia completa para resolver este escenario, incluyendo todas las fases y tareas`;
    this.sendCursorInstruction();
  }

  generateCodeForScenario() {
    if (!this.selectedScenario) return;

    const scenario = this.selectedScenario;
    
    // Construir instrucción completa con toda la información del escenario
    let instruction = `Genera el código de ejemplo para este ejercicio:\n\n`;
    instruction += `**Título:** ${scenario.title}\n`;
    instruction += `**Tipo:** ${scenario.type}\n`;
    instruction += `**Tiempo límite:** ${scenario.timeLimit} minutos\n\n`;
    instruction += `**Descripción:**\n${scenario.description}\n\n`;
    
    if (scenario.objectives && scenario.objectives.length > 0) {
      instruction += `**Objetivos:**\n`;
      scenario.objectives.forEach((obj, i) => {
        instruction += `${i + 1}. ${obj}\n`;
      });
      instruction += `\n`;
    }
    
    if (scenario.strategy && scenario.strategy.length > 0) {
      instruction += `**Estrategia:**\n`;
      scenario.strategy.forEach((phase, i) => {
        instruction += `Fase ${i + 1}: ${phase.phase} (${phase.duration} min)\n`;
        if (phase.tasks && phase.tasks.length > 0) {
          phase.tasks.forEach(task => {
            instruction += `  - ${task}\n`;
          });
        }
      });
      instruction += `\n`;
    }
    
    if (scenario.keyPoints && scenario.keyPoints.length > 0) {
      instruction += `**Puntos clave:**\n`;
      scenario.keyPoints.forEach(point => {
        instruction += `- ${point}\n`;
      });
      instruction += `\n`;
    }
    
    instruction += `\nPor favor, genera el código de ejemplo paso a paso e incrementalmente para resolver este ejercicio.`;
    
    this.cursorInstruction = instruction;
    this.sendCursorInstruction();
  }

  reconnectCursor() {
    this.cursorBridge.reconnect();
  }

  hasUsefulDetails(details: any): boolean {
    if (!details) return false;
    return !!(details.totalScenarios || 
              (details.scenarios && details.scenarios.length > 0) ||
              (details.concepts && details.concepts.concepts && details.concepts.concepts.length > 0) ||
              (details.objectives && details.objectives.length > 0) ||
              (details.phases && details.phases.length > 0));
  }
}
