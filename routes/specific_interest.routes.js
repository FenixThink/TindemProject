import { Router } from "express"
import SpecificInterestController from "../src/controllers/Specific_interest.controller.js"

const router = Router()
router.post("/specificInterest", SpecificInterestController.createSpecificInterest)

router.get('/specificInterest',SpecificInterestController.getAll)

router.get('/specificInterest/:id',SpecificInterestController.getOne)


router.get("/findUserSpecializations/:id",SpecificInterestController.findUserSpecializations)

export default router