import { Router } from "express"
import cityController from "../controllers/city.controller.js"


const routerCity = Router()
routerCity.post("/cityPost", cityController.createCity)

routerCity.get('/allcity',cityController.getAll)

export default routerCity