import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService, Question, TimeConfig, TimeSegment } from '../../services/questions.service';

@Component({
  selector: 'app-speech-ace',
  templateUrl: './speech-ace.component.html',
  styleUrls: ['./speech-ace.component.css']
})
export class SpeechAceComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  selectedQuestion: Question | null = null;
  isTimerRunning = false;
  timeRemaining = 0;
  timerInterval: any;
  currentSegment: string = '';
  answerParagraphs: string[] = []; // Párrafos de la respuesta divididos
  currentParagraphIndex = 0; // Índice del párrafo actual que se está leyendo
  totalTime = 0; // Tiempo total en segundos
  elapsedTime = 0; // Tiempo transcurrido
  timeConfig: TimeConfig | null = null;
  timeSegments: TimeSegment[] = [];
  showTimer = false; // Mostrar cronómetro solo si hay configuración de tiempo

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    // Cargar preguntas desde JSON
    this.questionsService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });

    // Cargar configuración de tiempo desde JSON
    this.questionsService.getTimeConfig().subscribe(config => {
      if (config && config.totalTime > 0) {
        this.timeConfig = config;
        this.totalTime = config.totalTime;
        this.timeRemaining = config.totalTime;
        this.timeSegments = config.segments;
        this.showTimer = true;
        // Establecer segmento inicial
        if (this.timeSegments.length > 0) {
          this.currentSegment = this.timeSegments[0].name;
        }
      } else {
        this.showTimer = false;
        this.timeConfig = null;
      }
    });
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  selectQuestion(question: Question) {
    this.selectedQuestion = question;
    this.resetTimer();
    // Dividir la respuesta en párrafos
    this.answerParagraphs = question.answer
      .split('\n\n')
      .filter(p => p.trim().length > 0)
      .map(p => p.trim());
    this.currentParagraphIndex = 0;
  }
  

  startTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
      return;
    }

    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.elapsedTime = this.totalTime - this.timeRemaining;

      // Actualizar segmento actual basado en la configuración del JSON
      this.updateCurrentSegment();

      // Calcular qué párrafo debería estar leyendo
      this.updateCurrentParagraph();

      // Scroll automático al párrafo actual
      this.scrollToCurrentParagraph();

      if (this.timeRemaining <= 0) {
        this.stopTimer();
        alert('¡Tiempo completado!');
      }
    }, 1000);
  }

  updateCurrentParagraph() {
    if (this.answerParagraphs.length === 0) return;

    // Calcular el progreso (0 a 1)
    const progress = this.elapsedTime / this.totalTime;
    
    // Calcular qué párrafo debería estar leyendo
    const targetIndex = Math.floor(progress * this.answerParagraphs.length);
    this.currentParagraphIndex = Math.min(targetIndex, this.answerParagraphs.length - 1);
  }

  scrollToCurrentParagraph() {
    // Usar setTimeout para asegurar que el DOM esté actualizado
    setTimeout(() => {
      const element = document.getElementById(`paragraph-${this.currentParagraphIndex}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100);
  }

  pauseTimer() {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  stopTimer() {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.resetTimer();
  }

  resetTimer() {
    this.pauseTimer();
    if (this.timeConfig) {
      this.timeRemaining = this.timeConfig.totalTime;
      this.totalTime = this.timeConfig.totalTime;
      this.elapsedTime = 0;
      if (this.timeSegments.length > 0) {
        this.currentSegment = this.timeSegments[0].name;
      }
    }
    this.currentParagraphIndex = 0;
    // Scroll al inicio
    setTimeout(() => {
      const element = document.getElementById('answer-container');
      if (element) {
        element.scrollTop = 0;
      }
    }, 100);
  }

  updateCurrentSegment() {
    if (!this.timeConfig || this.timeSegments.length === 0) return;

    // Encontrar el segmento actual basado en el tiempo restante
    for (const segment of this.timeSegments) {
      if (this.timeRemaining >= segment.startTime) {
        this.currentSegment = segment.name;
        break;
      }
    }
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  getTimerClass(): string {
    if (this.timeRemaining <= 30) {
      return 'danger';
    } else if (this.timeRemaining <= 60) {
      return 'warning';
    }
    return '';
  }

  getSegmentInfo() {
    if (!this.timeConfig) return null;

    const segment = this.timeSegments.find(s => s.name === this.currentSegment);
    if (segment) {
      return {
        name: segment.label,
        description: segment.description,
        timeRemaining: Math.max(0, this.timeRemaining - segment.startTime)
      };
    }
    return null;
  }

  getCurrentSegment(): TimeSegment | null {
    return this.timeSegments.find(s => s.name === this.currentSegment) || null;
  }

  // Calcular el tiempo esperado hasta un párrafo específico
  getExpectedTimeForParagraph(paragraphIndex: number): number {
    if (this.answerParagraphs.length === 0 || this.totalTime === 0) return 0;
    
    // Tiempo esperado = (índice + 1) / total_párrafos * tiempo_total
    const expectedProgress = (paragraphIndex + 1) / this.answerParagraphs.length;
    return Math.floor(expectedProgress * this.totalTime);
  }

  // Obtener el tiempo restante esperado para un párrafo
  getRemainingTimeForParagraph(paragraphIndex: number): number {
    if (!this.showTimer || this.totalTime === 0) return 0;
    
    const expectedTime = this.getExpectedTimeForParagraph(paragraphIndex);
    const remaining = expectedTime - this.elapsedTime;
    return remaining;
  }

  // Obtener el estado del tiempo para un párrafo (adelantado, atrasado, bien)
  getParagraphTimeStatus(paragraphIndex: number): 'ahead' | 'behind' | 'on-time' {
    if (!this.showTimer || this.totalTime === 0) return 'on-time';
    
    const remaining = this.getRemainingTimeForParagraph(paragraphIndex);
    const tolerance = 5; // 5 segundos de tolerancia
    
    if (remaining < -tolerance) {
      return 'behind'; // Va atrasado
    } else if (remaining > tolerance) {
      return 'ahead'; // Va adelantado
    } else {
      return 'on-time'; // Va bien
    }
  }

  // Formatear tiempo para mostrar en párrafos
  formatParagraphTime(seconds: number): string {
    if (seconds === 0) return '';
    const absSeconds = Math.abs(seconds);
    const mins = Math.floor(absSeconds / 60);
    const secs = absSeconds % 60;
    const sign = seconds < 0 ? '-' : '+';
    
    if (mins > 0) {
      return `${sign}${mins}:${secs.toString().padStart(2, '0')}`;
    } else {
      return `${sign}${secs}s`;
    }
  }
}
