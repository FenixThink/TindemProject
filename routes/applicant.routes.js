import { Router } from "express";
// import { aspirantRegiser } from "../controllers/Aspirant.controller.js"
import ApplicantController from "../src/controllers/Apliccant.controller.js";

const router = Router();

router.get('/register/applicant', function(_, res) {
    res.render('registerApplicant');
  });
router.post('/applicant/create',ApplicantController.applicantCreate);

router.get('/api/allaspirant', ApplicantController.getAll);
router.get('/aspirant/:id', ApplicantController.applicantId);



export default router;