import { Router } from "express";
// import { aspirantRegiser } from "../controllers/Aspirant.controller.js"
import ApplicantController from "../controllers/Apliccant.controller.js";

const router = Router();
const controllerApplicant = new ApplicantController();

// router.get('/RegisterAspirant', aspirantRegiser);
router.post('/createAspirant', controllerApplicant.applicantCreate);

export default router;