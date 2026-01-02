import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExamSelectorComponent } from './components/exam-selector/exam-selector.component';
import { SpeechAceComponent } from './components/speech-ace/speech-ace.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamSelectorComponent,
    SpeechAceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
