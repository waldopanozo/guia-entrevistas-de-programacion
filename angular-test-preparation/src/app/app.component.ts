import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedExam: string | null = null;

  onExamSelected(exam: string) {
    this.selectedExam = exam;
  }

  onBack() {
    this.selectedExam = null;
  }
}
