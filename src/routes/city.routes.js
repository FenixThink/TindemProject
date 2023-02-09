import { Router } from "express"
import cityController from "../controllers/City.controller.js"


const routerCity = Router()
routerCity.post("/cityPost", cityController.createCity)

routerCity.get('/allcity',cityController.getAll)

export default routerCity