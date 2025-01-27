export interface IQuestion {
    id: number;
    question: string;
    options: string[];
    correctOption: number;
    anwserExplanation?: string;
    selectedOption?: number;
}