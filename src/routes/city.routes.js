import { Router } from "express"
import CityController from "../controllers/city.controller.js"


const routerCity = Router()
routerCity.post("/cityPost",CityController.createCity)

routerCity.get('/allcity',CityController.getAll)

export default routerCity