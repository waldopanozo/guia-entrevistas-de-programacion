import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Question {
  id: number;
  title: string;
  answer: string;
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

export interface ExamConfig {
  examType: string;
  timeConfig: TimeConfig | null;
  questions: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private config: ExamConfig | null = null;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<ExamConfig> {
    if (this.config) {
      return of(this.config);
    }

    return this.http.get<ExamConfig>('assets/questions.json').pipe(
      map(config => {
        this.config = config;
        return config;
      }),
      catchError(error => {
        console.error('Error loading questions.json:', error);
        // Fallback a configuración por defecto
        return of(this.getDefaultConfig());
      })
    );
  }

  getQuestions(): Observable<Question[]> {
    return this.loadConfig().pipe(
      map(config => config.questions)
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

  private getDefaultConfig(): ExamConfig {
    return {
      examType: 'speechace',
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
}
