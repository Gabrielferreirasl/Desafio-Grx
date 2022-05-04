import { Request, Response } from 'express';
import ColetaService from '../services/ColetaService';

export default class ColetaController {
  constructor(public service = new ColetaService()) {}

  public async create(req: Request, res: Response): Promise<void> {
    await this.service.create(req.body);
    return res.status(201).end();
  }

  public async read(_req: Request, res: Response): Promise<typeof res> {
    const data = await this.service.read();
    return res.status(200).json(data);
  }
}
