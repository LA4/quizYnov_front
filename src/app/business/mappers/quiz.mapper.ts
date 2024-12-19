import {Injectable} from '@angular/core';
import {QuizDto} from '../dtos/quiz.dto';
import {Quiz} from '../models/quiz.model';

@Injectable({providedIn: 'root'})
export class QuizMapper {

  public fromDto(dto: QuizDto): Quiz {
    const {createdAt, categoryName, ...restDto} = dto;

    return {...restDto, category: categoryName, createAt: new Date(createdAt)}
  }

  public toDto(data: Quiz): QuizDto {
    const {createAt, category, ...restDto} = data;
    return {...restDto, categoryName: category, createdAt: createAt.toISOString()}
  }
}
