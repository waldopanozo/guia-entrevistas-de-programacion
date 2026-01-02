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
  cursorResponses: ProcessResponse[] = [];
  isProcessing = false;
  connectionStatus = false;
  private cursorSubscriptions: Subscription[] = [];

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

    // Agregar instrucción a las respuestas
    this.cursorResponses.push({
      type: 'processing',
      message: `Enviando: ${this.cursorInstruction}`,
      examId: 'woven'
    });

    // Enviar instrucción
    const instruction = this.cursorInstruction;
    this.cursorInstruction = ''; // Limpiar input

    // Procesar instrucción
    const processSub = this.cursorBridge.processInstruction({
      examId: 'woven',
      instruction: instruction,
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
    this.cursorResponses.push(message);

    // Scroll al final de las respuestas
    setTimeout(() => {
      const responsesContainer = document.getElementById('cursor-responses');
      if (responsesContainer) {
        responsesContainer.scrollTop = responsesContainer.scrollHeight;
      }
    }, 100);

    // Marcar como completado si es necesario
    if (message.type === 'complete' || message.type === 'error') {
      this.isProcessing = false;
    }
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

  reconnectCursor() {
    this.cursorBridge.reconnect();
  }
}
