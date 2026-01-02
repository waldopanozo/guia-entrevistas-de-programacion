import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionsService, Question } from '../../services/questions.service';

@Component({
  selector: 'app-speech-ace',
  templateUrl: './speech-ace.component.html',
  styleUrls: ['./speech-ace.component.css']
})
export class SpeechAceComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  selectedQuestion: Question | null = null;
  isTimerRunning = false;
  timeRemaining = 240; // 4 minutos en segundos
  timerInterval: any;
  currentSegment = 'intro'; // intro, development, conclusion

  // Tiempos en segundos para cada segmento
  readonly INTRO_TIME = 60; // 1 minuto
  readonly DEVELOPMENT_TIME = 120; // 2 minutos
  readonly CONCLUSION_TIME = 60; // 1 minuto

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  selectQuestion(question: Question) {
    this.selectedQuestion = question;
    this.resetTimer();
  }

  startTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
      return;
    }

    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;

      // Actualizar segmento actual basado en el tiempo restante
      if (this.timeRemaining > 180) {
        this.currentSegment = 'intro';
      } else if (this.timeRemaining > 60) {
        this.currentSegment = 'development';
      } else {
        this.currentSegment = 'conclusion';
      }

      if (this.timeRemaining <= 0) {
        this.stopTimer();
        alert('¡Tiempo completado!');
      }
    }, 1000);
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
    this.timeRemaining = 240;
    this.currentSegment = 'intro';
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
    if (this.currentSegment === 'intro') {
      return {
        name: 'Introducción',
        description: 'Contexto y presentación (Minuto 1)',
        timeRemaining: this.timeRemaining > 180 ? this.timeRemaining - 180 : 0
      };
    } else if (this.currentSegment === 'development') {
      return {
        name: 'Desarrollo',
        description: 'Ejemplos específicos (Minutos 2-3)',
        timeRemaining: this.timeRemaining > 60 ? this.timeRemaining - 60 : 0
      };
    } else {
      return {
        name: 'Conclusión',
        description: 'Reflexión final (Minuto 4)',
        timeRemaining: this.timeRemaining
      };
    }
  }
}
