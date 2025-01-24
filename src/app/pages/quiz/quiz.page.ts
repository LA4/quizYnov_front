import {Component, input} from '@angular/core';
import {QuizService} from '../../business/services/quiz.service';
import {Quiz} from '../../business/models/quiz.model';
import {Subscription} from 'rxjs';
import {RouterOutlet} from '@angular/router';
import {DatePipe} from '@angular/common';
import {QuestionService} from '../../business/services/question.service';
import {Question} from '../../business/models/question.model';
import {QuestionsComponent} from './components/questions/questions.component';

@Component({
  selector: 'app-quiz',
  imports: [
    RouterOutlet,
    DatePipe,
    QuestionsComponent
  ],
  templateUrl: './quiz.page.html',
  styleUrl: './quiz.page.css'
})
export class QuizPage {
  public readonly id = input.required<string>()
  protected quiz: Quiz | null = null;
  protected questions: Question[] | null = null;
  private subscription?: Subscription;
  private questionSubscription?: Subscription

  constructor(private readonly quizService: QuizService, private readonly questionService: QuestionService
  ) {
  }

  public ngOnInit() {
    this.subscription = this.quizService
      .getQuiz(this.id())
      .subscribe(quiz => {
        this.quiz = quiz
      })
  }


  public getQuestions() {
    this.questionSubscription = this.questionService
      .getQuestions()
      .subscribe(questions => {
        this.questions = questions
      })
  }

}
