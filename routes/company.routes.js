import { Router } from 'express'
import CompanyController from '../src/controllers/Company.controller.js';
import multer from '../public/libs/multer.js';


const router = Router()

router.get('/register/company', function (req, res, next) {
  res.render('registerCompany');
});
router.post('/company/create', multer.single('image'), CompanyController.Create);


router.get('/Allcompany', CompanyController.getAll)

export default router