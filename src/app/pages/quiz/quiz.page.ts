import {Component, input} from '@angular/core';
import {QuizService} from '../../business/services/quiz.service';
import {Quiz} from '../../business/models/quiz.model';
import {Subscription} from 'rxjs';
import {Router, RouterOutlet} from '@angular/router';
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
  protected score: number = 0
  protected endQuiz:boolean =false

  private subscription?: Subscription;
  private questionSubscription?: Subscription
  protected actualQuestion: Question | null = null;
  protected currentQuestionIndex: number=0;
  protected progression:number=0;

  constructor(
    private readonly quizService: QuizService,
    private readonly questionService: QuestionService,
    protected readonly router: Router
  ) {
  }

  public ngOnInit() {
    this.subscription = this.quizService
      .getQuiz(this.id())
      .subscribe(quiz => {
        this.quiz = quiz
      })
  }

  public showQuestion(questionIndex :number): void {
    if (this.questions && this.questions.length > 0) {
      this.actualQuestion = this.questions[questionIndex];
    }
  }

  onScoreReceived(score: number): void {
    this.score = score;
    this.currentQuestionIndex++;
    if (this.questions &&this.currentQuestionIndex < this.questions.length) {
      this.showQuestion(this.currentQuestionIndex);
    } else {
      this.actualQuestion = null;
      if(this.questions){

      this.progression = Math.round((score / this.questions.length ) * 100);
      }
      this.endQuiz = true;
    }
  }
  public getQuestion() {

    if (this.quiz && this.questionService) {
      this.questionSubscription = this.questionService
        .getQuestionsByCategory(this.quiz.category.id.toString())
        .subscribe((questions) => {
          this.questions = questions;
          this.showQuestion(this.currentQuestionIndex)
        });
    }
  }

  public ngOnDestroy() {
    this.questionSubscription?.unsubscribe()
  }

  protected readonly Math = Math;
}
