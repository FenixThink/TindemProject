import { Router } from "express"
import ProfileSpecializationController from "../controllers/Profile_Specialization.controller.js"

const routerProfileSpecialization = Router()
// const controller = new ProfileSpecializationController()

routerProfileSpecialization.post("/profileSpecialization/create", ProfileSpecializationController.CreateSpec)

export default routerProfileSpecialization
