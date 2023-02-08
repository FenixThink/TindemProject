import { Router } from "express"
import cityController from "../controllers/city.controller.js"


const routerCity = Router()
routerCity.post("/cityPost", cityController.createCity)
routerCity.get('/all',cityController.ObtenerDatos)
// router.get('/All',async(req,res)=>{
//     const query = await City.All()
//     console.log(query[0])

// })

export default routerCity