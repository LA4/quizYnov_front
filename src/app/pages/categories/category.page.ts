import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {QuizService} from '../../business/services/quiz.service';
import {QuestionService} from '../../business/services/question.service';
import {Subscription} from 'rxjs';
import {Quiz} from '../../business/models/quiz.model';

@Component({
  selector: 'app-category-page',
  imports: [RouterLink],
  templateUrl: './category.page.html',
  styleUrl: './category.page.css'
})
export class CategoryPage {
  private subscription?: Subscription;
  protected quizzes?: Quiz[] | null = null;
  constructor(
    private readonly quizService: QuizService,
  ) {
  }

  public ngOnInit() {
    this.subscription = this.quizService
      .getQuizzes()
      .subscribe(quizzes => {
        this.quizzes = quizzes
      })
  }
}
