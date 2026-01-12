import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface ProcessRequest {
  examId?: string;
  instruction: string;
  language?: string; // Lenguaje de programación seleccionado
  stream?: boolean;
}

export interface ProcessResponse {
  type: 'connected' | 'processing' | 'stream_chunk' | 'stream_result' | 'result' | 'complete' | 'error' | 'exam_data' | 'exam' | 'exams_list';
  clientId?: string;
  message?: string;
  examId?: string;
  chunk?: string;
  progress?: number;
  result?: any;
  data?: any;
  exams?: any[];
  error?: string;
}

export interface ExamData {
  info: any;
  config: any;
}

@Injectable({
  providedIn: 'root'
})
export class CursorBridgeService {
  private readonly API_URL = 'http://localhost:3001/api';
  private readonly WS_URL = 'ws://localhost:3002';
  
  private wsSubject: WebSocketSubject<ProcessResponse> | null = null;
  private wsConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  // Subjects para diferentes tipos de mensajes
  public messages$ = new Subject<ProcessResponse>();
  public connectionStatus$ = new BehaviorSubject<boolean>(false);
  public examData$ = new Subject<ExamData>();

  constructor(private http: HttpClient) {
    this.connectWebSocket();
  }

  // ============================================
  // WebSocket Methods
  // ============================================

  /**
   * Conectar al servidor WebSocket
   */
  private connectWebSocket(): void {
    try {
      this.wsSubject = webSocket<ProcessResponse>(this.WS_URL);
      this.wsConnected = true;
      this.connectionStatus$.next(true);
      this.reconnectAttempts = 0;

      this.wsSubject.subscribe({
        next: (message) => this.handleWebSocketMessage(message),
        error: (error) => {
          console.error('WebSocket error:', error);
          this.wsConnected = false;
          this.connectionStatus$.next(false);
          this.attemptReconnect();
        },
        complete: () => {
          console.log('WebSocket connection closed');
          this.wsConnected = false;
          this.connectionStatus$.next(false);
          this.attemptReconnect();
        }
      });
    } catch (error) {
      console.error('Error connecting to WebSocket:', error);
      this.wsConnected = false;
      this.connectionStatus$.next(false);
    }
  }

  /**
   * Intentar reconectar al WebSocket
   */
  private attemptReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
      
      console.log(`Attempting to reconnect in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      
      setTimeout(() => {
        this.connectWebSocket();
      }, delay);
    } else {
      console.error('Max reconnection attempts reached');
    }
  }

  /**
   * Manejar mensajes del WebSocket
   */
  private handleWebSocketMessage(message: ProcessResponse): void {
    console.log('WebSocket message received:', message.type);

    switch (message.type) {
      case 'connected':
        console.log('Connected to bridge server:', message.clientId);
        break;
      
      case 'exam_data':
        if (message.data) {
          this.examData$.next(message.data);
        }
        break;
      
      case 'exam':
        if (message.data) {
          this.examData$.next(message.data);
        }
        break;
      
      case 'exams_list':
        this.messages$.next(message);
        break;
    }

    // Emitir todos los mensajes
    this.messages$.next(message);
  }

  /**
   * Enviar mensaje al servidor WebSocket
   */
  private sendWebSocketMessage(message: any): boolean {
    if (this.wsSubject && this.wsConnected) {
      try {
        this.wsSubject.next(message);
        return true;
      } catch (error) {
        console.error('Error sending WebSocket message:', error);
        return false;
      }
    } else {
      console.warn('WebSocket not connected. Message not sent:', message);
      return false;
    }
  }

  /**
   * Procesar instrucción via WebSocket (tiempo real)
   */
  processInstruction(request: ProcessRequest): Observable<ProcessResponse> {
    const message = {
      type: 'process',
      examId: request.examId,
      instruction: request.instruction,
      language: request.language || 'javascript', // Incluir lenguaje, default JavaScript
      stream: request.stream !== false // Por defecto true
    };

    if (!this.sendWebSocketMessage(message)) {
      // Si WebSocket no está disponible, usar API REST
      return this.processInstructionAPI(request);
    }

    // Filtrar solo mensajes relacionados con esta solicitud
    return this.messages$.asObservable() as Observable<ProcessResponse>;
  }

  /**
   * Obtener examen via WebSocket
   */
  getExam(examId: string): void {
    this.sendWebSocketMessage({
      type: 'get_exam',
      examId: examId
    });
  }

  /**
   * Listar exámenes via WebSocket
   */
  listExams(): void {
    this.sendWebSocketMessage({
      type: 'list_exams'
    });
  }

  /**
   * Cerrar conexión WebSocket
   */
  disconnect(): void {
    if (this.wsSubject) {
      this.wsSubject.complete();
      this.wsSubject = null;
      this.wsConnected = false;
      this.connectionStatus$.next(false);
    }
  }

  // ============================================
  // API REST Methods (Fallback)
  // ============================================

  /**
   * Health check
   */
  healthCheck(): Observable<any> {
    return this.http.get(`${this.API_URL}/health`);
  }

  /**
   * Procesar instrucción via API REST
   */
  processInstructionAPI(request: ProcessRequest): Observable<any> {
    return this.http.post(`${this.API_URL}/process`, {
      examId: request.examId,
      instruction: request.instruction
    });
  }

  /**
   * Obtener examen via API REST
   */
  getExamAPI(examId: string): Observable<any> {
    return this.http.get(`${this.API_URL}/exam/${examId}`);
  }

  /**
   * Listar exámenes via API REST
   */
  listExamsAPI(): Observable<any> {
    return this.http.get(`${this.API_URL}/exams`);
  }

  // ============================================
  // Utility Methods
  // ============================================

  /**
   * Verificar si WebSocket está conectado
   */
  isConnected(): boolean {
    return this.wsConnected;
  }

  /**
   * Reconectar manualmente
   */
  reconnect(): void {
    this.disconnect();
    this.reconnectAttempts = 0;
    this.connectWebSocket();
  }
}
