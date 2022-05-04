import { Answer, Data } from "../interfaces/Coleta";
import fs from 'fs/promises';

const getActualData = async () => {
  const data = await fs.readFile('../Data/ColetaData.json', { encoding: 'utf-8' });
  return JSON.parse(data);
}

export const writeNewAnswer = async (newAnswer: Answer) => {
  const actualData = await getActualData();
  const newData = [ ...actualData, newAnswer];
  await fs.writeFile('../Data/ColetaData.json', JSON.stringify(newData), { encoding: 'utf-8' });
}

export const getData = async(): Promise<Data> => {
  const actualData: Answer[] = await getActualData();
   return actualData.reduce((obj, questions) => {
     Object.values(questions).forEach((response) => {
      switch (response) {
        case 'Não':
          obj.QuantidadeNegativa += 1;
        case 'Sim':
          return obj.QuantidadePositiva += 1;
        case 'Agora!!':
          return obj.QuantidadePositiva += 2;
        case 'Não Sei':
          return obj.QuantidadeNaoAvaliada += 1;
        default: break;
      }
    });
    return obj;
  },{
    QuantidadePositiva: 0,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0
  });
};
