export interface QuizDto {
  readonly  id: string
  readonly name: string
  readonly description: string
  readonly category: { id: number, name: string,createAt: string }
  readonly difficulty: number
  readonly createdAt: string
}
