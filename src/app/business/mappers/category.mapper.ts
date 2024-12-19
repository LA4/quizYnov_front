import {Injectable} from '@angular/core';
import {CategoryDto} from '../dtos/categoy.dto';
import {Category} from '../models/category.model';

@Injectable({providedIn: 'root'})
export class CategoryMapper {
  public fromDto(dto: CategoryDto): Category {
    const {createdAt, ...restDto} = dto;
    return {...restDto, createAt: new Date(createdAt)}
  }

  public toDto(data: Category): CategoryDto {
    const {createAt, ...restDto} = data;
    return {...restDto, createdAt: createAt.toISOString()}
  }
}
