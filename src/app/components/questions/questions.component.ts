import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../interfaces/IQuestion';
import { QuestionsService } from '../../services/questions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit{

  questions: IQuestion[] = [];
  selectedQuestions: IQuestion[] = [];
  questionCount = 30;
  formFinished = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  lastQuestion! :IQuestion;

  constructor(private questionsService: QuestionsService) {
    this.questions = this.questionsService.getQuestions();
    this.selectedQuestions = this.questionsService.getRandomQuestions(this.questionCount);
  }

  ngOnInit(): void {
    this.validateAnswers();
    this.lastQuestion = {id: 0, question: '', options: [], correctOption: 0};
  }

  checkAnswer(question: IQuestion, option: number): void {
    if (question.correctOption === option) {
      if(this.lastQuestion.id !== question.id) {
        this.correctAnswers++;
      }
     
    } else {
      if(this.lastQuestion.id !== question.id) {
        this.incorrectAnswers++;
      }
    }
    this.lastQuestion = question;
  }

  validateAnswers() {
    this.formFinished = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // this.selectedQuestions.forEach(question => {
    //   if (question.selectedOption === question.correctOption) {
    //     console.log(`Question ${question.id}: Correct`);
    //   } else {
    //     console.log(`Question ${question.id}: Incorrect`);
    //   }
    // });
  }
}
