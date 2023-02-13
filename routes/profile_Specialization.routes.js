import { Router } from "express"
import ProfileSpecializationController from "../src/controllers/Profile_Specialization.controller.js"

const routerProfileSpecialization = Router()
// const controller = new ProfileSpecializationController()

routerProfileSpecialization.post("/profileSpecialization/create", ProfileSpecializationController.CreateSpec)

routerProfileSpecialization.get("/allprofilespecialization",ProfileSpecializationController.getAll)


routerProfileSpecialization.get("/allprofilespecialization/:id",ProfileSpecializationController.getFindOne)



export default routerProfileSpecialization
