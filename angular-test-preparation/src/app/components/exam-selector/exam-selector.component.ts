import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { QuestionsService, ExamInfo } from '../../services/questions.service';

@Component({
  selector: 'app-exam-selector',
  templateUrl: './exam-selector.component.html',
  styleUrls: ['./exam-selector.component.css']
})
export class ExamSelectorComponent implements OnInit {
  @Output() examSelected = new EventEmitter<string>();

  exams: ExamInfo[] = [];
  loading = true;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getExamsList().subscribe(
      exams => {
        this.exams = exams;
        this.loading = false;
      },
      error => {
        console.error('Error loading exams list:', error);
        this.loading = false;
      }
    );
  }

  selectExam(examId: string) {
    this.examSelected.emit(examId);
  }
}
