import { Router } from "express"
import SpecificInterestController from "../controllers/SpecificInterest.controller.js"

const router = Router()
router.post("/specificInterest", SpecificInterestController.createSpecificInterest)

export default router