import {Injectable} from '@angular/core';
import {CategoryMapper} from '../mappers/category.mapper';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Category} from '../models/category.model';
import {CategoryDto} from '../dtos/categoy.dto';
import {ResponseDto} from '../dtos/response.dto';
import {ResponseModel} from '../models/reponse.model';
import {ResponseMapper} from '../mappers/response.mapper';

@Injectable({providedIn: 'root'})
export class ResponseService {
  constructor(
    private readonly responseMapper: ResponseMapper,
    private readonly client: HttpClient,
  ) {
  }

  public getResponseByQuestionId(questionId: string, anwser: string): Observable<ResponseModel> {
    return this.client
      .get<ResponseDto>(`http://localhost:5001/api/responses/${questionId}/${anwser}`)
      .pipe(
        map(response => {

          return this.responseMapper.fromDto(response)
        })
      )
  }


}
