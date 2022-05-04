export interface Answers {
  Pergunta1: string,
  Pergunta2: string,
  Pergunta3: string,
  Pergunta4: string
}

export interface Data {
  QuantidadePositiva: number,
  QuantidadeNegativa: number,
  QuantidadeNaoAvaliada: number
}

export interface AllData {
  answers: Answers[],
  data: Data
}