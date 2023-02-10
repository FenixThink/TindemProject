import { Router } from "express";
// import { aspirantRegiser } from "../controllers/Aspirant.controller.js"
import ApplicantController from "../controllers/Apliccant.controller.js";

const router = Router();


router.post('/applicant/create',ApplicantController.applicantCreate);
router.get('/aspirant/:id', ApplicantController.applicantId);


router.get('/allaspirant', ApplicantController.getAll);



export default router;