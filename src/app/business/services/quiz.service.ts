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
      .get<QuizDto[]>("https://localhost:5000/api/quizzes")
      .pipe(
        map(dtos => {
          console.log("dto quiz:",dtos);

          return dtos.map(q => this.mapper.fromDto(q))
        })
      )
  }

  public getQuiz(id: string): Observable<Quiz> {
    return this.client
      .get<QuizDto>(`http://localhost:5000/api/quizzes/${id}`)
      .pipe(
        map(dto => {
          console.log("dto quiz:",dto);
          return this.mapper.fromDto(dto)
        })
      )
  }

}
