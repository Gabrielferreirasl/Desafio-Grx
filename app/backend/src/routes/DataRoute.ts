import { Router } from "express";
import ColetaController from "../controllers/ColetaController";

const dataRouter = Router();
const coletaController = new ColetaController();

dataRouter.post('/answers', ((req, res) => coletaController.create(req, res)));
dataRouter.get('/answers', ((req, res) => coletaController.read(req, res)));

export default dataRouter;
