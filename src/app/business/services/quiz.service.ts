import {Injectable} from '@angular/core';
import {QuizMapper} from '../mappers/quiz.mapper';
import {HttpClient} from '@angular/common/http';
import {QuizDto} from '../dtos/quiz.dto';
import {map, Observable} from 'rxjs';
import {Quiz} from '../models/quiz.model';

@Injectable({providedIn: 'root'})
export class QuizService {
  constructor(
    private readonly mapper: QuizMapper,
    private readonly client: HttpClient
  ) {
  }

  public getQuizzes(): Observable<Quiz[]> {
    return this.client
      .get<QuizDto[]>("http://localhost:5001/api/quizzes")
      .pipe(
        map(dtos => {
          return dtos.map(d => this.mapper.fromDto(d))
        })
      )
  }

  public getQuiz(id: string): Observable<Quiz> {
    return this.client
      .get<QuizDto>(`http://localhost:5001/api/quizzes/${id}`)
      .pipe(
        map(dto => this.mapper.fromDto(dto))
      )
  }
}
