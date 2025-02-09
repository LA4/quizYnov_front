import {Injectable} from '@angular/core';
import {QuizDto} from '../dtos/quiz.dto';
import {Quiz} from '../models/quiz.model';
import {CategoryService} from '../services/category.service';

@Injectable({providedIn: 'root'})
export class QuizMapper {

  constructor(private categoryService: CategoryService) {
  }

  public fromDto(dto: QuizDto): Quiz {
    const {createdAt, ...restDto} = dto;
    return {...restDto, createAt: new Date(createdAt)}
  }

}
