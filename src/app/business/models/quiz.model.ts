export interface Quiz {
  readonly  id: string
  readonly name: string
  readonly description: string
  readonly category: string
  readonly question: string[]
  readonly difficulty: number
  readonly createAt: Date

}