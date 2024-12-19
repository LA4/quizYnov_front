export interface QuizDto {
  readonly  id: string
  readonly name: string
  readonly description: string
  readonly categoryName: string
  readonly question: string[]
  readonly difficulty: number
  readonly createdAt: string
}
