import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Question} from '../models/question.model';
import {QuestionDto} from '../dtos/question.dto';
import {QuestionMapper} from '../mappers/question.mapper';


@Injectable({providedIn: 'root'})
export class QuestionService {
  constructor(
    private readonly mapper: QuestionMapper,
    private readonly client: HttpClient) {
  }

  public getQuestions(): Observable<Question[]> {
    return this.client
      .get<QuestionDto[]>("http://localhost:5001/api/questions")
      .pipe(
        map(questionsDtos => {
          return questionsDtos.map(q => this.mapper.fromDto(q));
        })
      )
  } public getQuestionsByCategory(categoryId: string): Observable<Question[]> {
    return this.client
      .get<QuestionDto[]>(`http://localhost:5001/api/questions/${categoryId}`)
      .pipe(
        map(questionsByIdDtos => {
          console.log("questions:",questionsByIdDtos);
          return questionsByIdDtos.map(q => this.mapper.fromDto(q));
        })
      )
  }
}
