import {Component, input} from '@angular/core';
import {QuizService} from '../../business/services/quiz.service';
import {Quiz} from '../../business/models/quiz.model';
import {Subscription} from 'rxjs';
import {RouterOutlet} from '@angular/router';
import {DatePipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [
    RouterOutlet,
    DatePipe,
    TitleCasePipe
  ],
  templateUrl: './quiz.page.html',
  styleUrl: './quiz.page.css'
})
export class QuizPage {
  public readonly id = input.required<string>()
  protected quiz: Quiz | null = null;
  private subscription?: Subscription;

  constructor(private readonly quizService: QuizService) {
  }

  public ngOnInit() {
    this.subscription = this.quizService
      .getQuiz(this.id())
      .subscribe(quiz => {
        this.quiz = quiz
        console.log(quiz)
      })
  }
}
