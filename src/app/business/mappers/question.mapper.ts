import {Injectable} from '@angular/core';
import {QuestionDto} from '../dtos/question.dto';
import {Question} from '../models/question.model';

@Injectable({providedIn: 'root'})
export class QuestionMapper {
  public fromDto(dto: QuestionDto): Question {
    const {questionText, answerChoice, ...restDto} = dto
    return {question: questionText, answers: answerChoice, ...restDto}
  }
}
