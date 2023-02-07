import { Router } from "express"
import {cityController} from "../controllers/city.controller.js"

const routerCity = Router()
routerCity.post("/cityPost", cityController.createCity)

export default routerCity