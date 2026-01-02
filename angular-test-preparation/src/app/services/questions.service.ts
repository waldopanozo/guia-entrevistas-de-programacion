import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay, switchMap } from 'rxjs/operators';

// Interfaces para diferentes tipos de preguntas
export interface Question {
  id: number;
  title: string;
  answer: string;
  category?: string;
  tips?: string[];
}

export interface MultipleChoiceOption {
  id: string;
  text: string;
}

export interface MultipleChoiceQuestion {
  id: number;
  category: string;
  question: string;
  options: MultipleChoiceOption[];
  correctAnswers: string[];
  explanation?: string;
  userAnswers?: string[];
}

export interface InterviewQuestion {
  id: number;
  title: string;
  category: string;
  answer: string;
  tips?: string[];
}

export interface TimeSegment {
  name: string;
  label: string;
  description: string;
  duration: number;
  startTime: number;
}

export interface TimeConfig {
  totalTime: number;
  segments: TimeSegment[];
}

// Configuración de examen base
export interface BaseExamConfig {
  examType: string;
  name: string;
  description: string;
  timeConfig: TimeConfig | null;
  instructions?: string;
}

// Configuración para examen de speaking (SpeechAce)
export interface SpeakingExamConfig extends BaseExamConfig {
  questions: Question[];
}

// Configuración para examen de opción múltiple (360, Assure)
export interface MultipleChoiceExamConfig extends BaseExamConfig {
  questions: MultipleChoiceQuestion[];
}

// Configuración para entrevistas (VanHack)
export interface InterviewExamConfig extends BaseExamConfig {
  questions: InterviewQuestion[];
}

export type ExamConfig = SpeakingExamConfig | MultipleChoiceExamConfig | InterviewExamConfig;

// Configuración de lista de exámenes disponibles
export interface ExamInfo {
  id: string;
  name: string;
  description: string;
  type: 'speaking' | 'multiple-choice' | 'technical-qa' | 'interview' | 'technical-assessment';
  configFile: string;
  icon: string;
}

export interface ExamsList {
  exams: ExamInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private configs: Map<string, ExamConfig> = new Map();
  private examsList$: Observable<ExamsList> | null = null;

  constructor(private http: HttpClient) {}

  // Cargar lista de exámenes disponibles
  getExamsList(): Observable<ExamInfo[]> {
    if (!this.examsList$) {
      this.examsList$ = this.http.get<ExamsList>('assets/exam-config.json').pipe(
        shareReplay(1),
        catchError(error => {
          console.error('Error loading exam-config.json:', error);
          return of({ exams: [] });
        })
      );
    }
    return this.examsList$.pipe(
      map(list => list.exams)
    );
  }

  // Cargar configuración de un examen específico
  loadExam(examId: string): Observable<ExamConfig> {
    return this.getExamsList().pipe(
      map(exams => {
        const examInfo = exams.find(e => e.id === examId);
        if (!examInfo) {
          throw new Error(`Exam ${examId} not found`);
        }
        return examInfo;
      }),
      map(examInfo => `assets/${examInfo.configFile}`),
      switchMap(url => this.http.get<ExamConfig>(url).pipe(
        map(config => {
          this.configs.set(examId, config);
          return config;
        }),
        catchError(error => {
          console.error(`Error loading exam config for ${examId}:`, error);
          return of(this.getDefaultConfig(examId));
        })
      ))
    );
  }

  // Métodos de compatibilidad para SpeechAce (mantener retrocompatibilidad)
  loadConfig(): Observable<ExamConfig> {
    return this.loadExam('speechace');
  }

  getQuestions(): Observable<Question[]> {
    return this.loadConfig().pipe(
      map(config => {
        if ('questions' in config && Array.isArray(config.questions)) {
          return config.questions as Question[];
        }
        return [];
      })
    );
  }

  getQuestionById(id: number): Observable<Question | undefined> {
    return this.getQuestions().pipe(
      map(questions => questions.find(q => q.id === id))
    );
  }

  getTimeConfig(): Observable<TimeConfig | null> {
    return this.loadConfig().pipe(
      map(config => config.timeConfig)
    );
  }

  getExamType(): Observable<string> {
    return this.loadConfig().pipe(
      map(config => config.examType)
    );
  }

  private getDefaultConfig(examType: string = 'speechace'): ExamConfig {
    if (examType === 'speechace') {
      return {
        examType: 'speechace',
        name: 'SpeechAce',
        description: 'Examen de inglés',
        timeConfig: {
          totalTime: 240,
          segments: [
            {
              name: 'intro',
              label: 'Introducción',
              description: 'Contexto y presentación',
              duration: 60,
              startTime: 180
            },
            {
              name: 'development',
              label: 'Desarrollo',
              description: 'Ejemplos específicos',
              duration: 120,
              startTime: 60
            },
            {
              name: 'conclusion',
              label: 'Conclusión',
              description: 'Reflexión final',
              duration: 60,
              startTime: 0
            }
          ]
        },
        questions: []
      };
    }
    
    return {
      examType,
      name: 'Examen',
      description: 'Configuración por defecto',
      timeConfig: null,
      questions: []
    };
  }
}
