import { Router } from "express";
import InterestAreaController from "../src/controllers/Interest_area.controller.js";

const routerArea = Router();

routerArea.post('/Area/create',InterestAreaController.createInterestArea)

routerArea.get('/Area/Interes/:email',InterestAreaController.getInterestAplicant)

routerArea.get('/Area',InterestAreaController.InteresgetAll)
routerArea.get('/cc/:id',InterestAreaController.FindOne)

export default routerArea