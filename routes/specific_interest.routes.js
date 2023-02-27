import { Router } from "express"
import SpecificInterestController from "../src/controllers/Specific_interest.controller.js"

const router = Router()
router.post("/specificInterest", SpecificInterestController.createSpecificInterest)

router.get('/specificInterest',SpecificInterestController.getAll)

router.get('/specificInterest/:id',SpecificInterestController.getOne)
router.get('/specificInterestOfArea/:id',SpecificInterestController.findinteresArea)

router.get("/findUserSpecializations/:id",SpecificInterestController.findUserSpecializations)
router.get("/findAllApplicantsEmailWithSameInterest/:specialization/",SpecificInterestController.findAllApplicantsEmailWithSameInterest)

export default router