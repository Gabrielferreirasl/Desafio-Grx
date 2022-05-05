import { getData, writeNewAnswer } from '../helpers/databaseFunctions';
import { Answer, Data } from '../interfaces/Coleta';

export default class ColetaService {
  constructor() {}

  public async create(answer: Answer): Promise<void> {
    await writeNewAnswer(answer);
  }

  public async read(): Promise<Data> {
    const data = await getData();
    return data;
  }
}
