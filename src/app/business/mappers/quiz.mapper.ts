import {Injectable} from '@angular/core';
import {QuizDto} from '../dtos/quiz.dto';
import {Quiz} from '../models/quiz.model';

@Injectable({providedIn: 'root'})
export class QuizMapper {
  public fromDto(dto: QuizDto): Quiz {
    const {createAt, ...restDto} = dto;
    return {...restDto, createAt: new Date(createAt)}
  }

  public toDto(data: Quiz): QuizDto {
    const {createAt, ...restDto} = data;
    return {...restDto, createAt: createAt.toISOString()}
  }
}
