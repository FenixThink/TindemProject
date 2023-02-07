import { Router } from "express"
import SpecificInterestController from "../controllers/SpecificInterest.controller.js"

const router = Router()
router.post("/speficitInterest", SpecificInterestController.createSpecificInterest)

export default router