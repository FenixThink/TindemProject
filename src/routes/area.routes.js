import { Router } from "express";
import InterestAreaController from "../controllers/Interest_area.controller.js";

const routerArea = Router();

// routerArea.post('/Area/create',InterestAreaController.createInterestArea())
routerArea.get('/Area/Interes/:id',InterestAreaController.getInterestAplicant())

export default routerArea