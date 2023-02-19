import { Router } from "express";
import Middelwares from '../src/Middlewares/Auth.Middleware.js';
import InterestAreaController from "../src/controllers/Interest_area.controller.js";
const middelwares = new Middelwares()

const routerArea = Router();

routerArea.post('/Area/create',InterestAreaController.createInterestArea)

routerArea.get('/Interes/applicant/:email',middelwares.Authmidelware,InterestAreaController.getInterestAplicant)
routerArea.get('/Interes/company/:email',middelwares.Authmidelware,InterestAreaController.getInterestCompany)

routerArea.get('/Area',InterestAreaController.InteresgetAll)
routerArea.get('/cc/:id',InterestAreaController.FindOne)

export default routerArea