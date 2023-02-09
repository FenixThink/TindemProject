import { Router } from "express";
// import { aspirantRegiser } from "../controllers/Aspirant.controller.js"
import ApplicantController from "../controllers/Apliccant.controller.js";

const router = Router();

// router.get('/RegisterAspirant', aspirantRegiser);
router.post('/createAspirant',ApplicantController.applicantCreate);
router.get('/aspirant/:id', ApplicantController.applicantId);

export default router;