import { Router } from "express";
import InterestAreaController from "../controllers/Interest_area.controller.js";

const routerArea = Router();

routerArea.post('/Area/create',InterestAreaController.createInterestArea)

routerArea.get('/Area/Interes/:id',InterestAreaController.getInterestAplicant)

routerArea.get('/Area',InterestAreaController.InteresgetAll)
routerArea.get('/Area/:id',InterestAreaController.FindOne)

export default routerArea