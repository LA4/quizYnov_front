import {Component, OnDestroy, OnInit} from '@angular/core';
import {Quiz} from '../../../../business/models/quiz.model';
import {Subscription} from 'rxjs';
import {QuizService} from '../../../../business/services/quiz.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {

  protected quiz: Quiz[] | null = null;
  private quizSubscription?: Subscription;

  constructor(
    private readonly quizService: QuizService,
  ) {
  }

  public ngOnInit() {
    this.quizSubscription = this.quizService
      .getQuizzes()
      .subscribe(quizzes => {
        this.quiz = quizzes
      })
  }


  public ngOnDestroy() {
    this.quizSubscription?.unsubscribe();
  }
}
