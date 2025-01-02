import { Component } from '@angular/core';
import {Question} from '../../../../business/models/question.model';
import {Subscription} from 'rxjs';
import {QuestionService} from '../../../../business/services/question.service';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {

  protected questions: Question[] | null = null;
  private questionSubscription: Subscription;

  constructor(
    private readonly questionService: QuestionService,
  ){}


}
