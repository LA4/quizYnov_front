import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Question} from '../../../../business/models/question.model';
import {Subscription} from 'rxjs';
import {QuestionService} from '../../../../business/services/question.service';
import {ResponseService} from '../../../../business/services/response.service';


@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit, OnDestroy {
  protected isResponse: boolean = false;
  private questionSubscription?: Subscription;
  private responseSubscription?: Subscription;

  @Input() actualQuestion!: Question;
  @Output() getScore = new EventEmitter<number>();
  private isGoodResponse: number =0;

  constructor(
    private readonly questionService: QuestionService,
    private readonly responseService: ResponseService,
  ) {
  }


  public getQuestionAnswer(questionId: string, answer: string): void {
    this.responseService.getResponseByQuestionId(questionId, answer).subscribe({
      next: (r) => {
        this.isResponse = r.response;
        if (this.isResponse) {
          this.isGoodResponse++;
        }
        this.getScore.emit(this.isGoodResponse);
      }
    });
  }


  public ngOnDestroy() {
    this.questionSubscription?.unsubscribe()
    this.responseSubscription?.unsubscribe()
  }

  ngOnInit(): void {
  }

}
