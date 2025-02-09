export interface QuestionDto {
  readonly id: string;
  readonly questionText: string;
  readonly answerChoice: string[];
  readonly categoryId: string;
}
