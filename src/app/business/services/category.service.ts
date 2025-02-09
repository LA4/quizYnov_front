import {Injectable} from '@angular/core';
import {CategoryMapper} from '../mappers/category.mapper';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Category} from '../models/category.model';
import {CategoryDto} from '../dtos/categoy.dto';

@Injectable({providedIn: 'root'})
export class CategoryService {
  constructor(
    private readonly categoryMapper: CategoryMapper,
    private readonly client: HttpClient,
  ) {
  }

  public getCategories(): Observable<Category[]> {
    return this.client
      .get<CategoryDto[]>("http://localhost:5001/api/categories")
      .pipe(map(categoryDto => {
        return categoryDto.map(c => this.categoryMapper.fromDto(c));
      }))
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.client
      .get<CategoryDto>(`http://localhost:5001/api/categories/${id}`)
      .pipe(map(categoryDto => this.categoryMapper.fromDto(categoryDto)))
  }
}
