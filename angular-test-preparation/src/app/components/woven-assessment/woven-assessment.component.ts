import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  constructor(
    private http: HttpClient,
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    this.loadWovenConfig();
  }

  ngOnDestroy() {
    this.stopAllTimers();
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
  }
}
