import {Category} from './category.model';

export interface Quiz {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly category: { id: number, name: string,createAt: string }
  readonly difficulty: number
  readonly createAt: Date

}
