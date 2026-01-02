import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exam-selector',
  templateUrl: './exam-selector.component.html',
  styleUrls: ['./exam-selector.component.css']
})
export class ExamSelectorComponent {
  @Output() examSelected = new EventEmitter<string>();

  exams = [
    { id: 'vanhack', name: 'VanHack', description: 'Práctica para entrevistas VanHack' },
    { id: 'conocimientos', name: 'Examen de Conocimientos', description: 'Evaluación técnica' },
    { id: 'speechace', name: 'SpeechAce - Examen de Inglés', description: 'Práctica de speaking con tiempos específicos' },
    { id: 'entrevista', name: 'Entrevista General', description: 'Preparación para entrevistas' }
  ];

  selectExam(examId: string) {
    this.examSelected.emit(examId);
  }
}
