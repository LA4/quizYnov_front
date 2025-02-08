import {Component, input, OnDestroy, OnInit} from '@angular/core';
import {Question} from '../../../../business/models/question.model';
import {Subscription} from 'rxjs';
import {QuestionService} from '../../../../business/services/question.service';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit, OnDestroy {
  public readonly categoryId = input.required<string | undefined>()
  protected questions: Question[] | null = null;
  private questionSubscription?: Subscription;

  constructor(
    private readonly questionService: QuestionService,
  ) {
  }

  public ngOnInit() {
    // this.questionSubscription = this.questionService
    //   .getQuestionsByCategory(categoryId)
    //   .subscribe()
    console.log("question - categoryId :",this.categoryId)
  }
  public ngOnDestroy() {
    this.questionSubscription?.unsubscribe()
  }

}
