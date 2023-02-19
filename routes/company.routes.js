import { Router } from 'express'
import CompanyController from '../src/controllers/Company.controller.js';

const router = Router()

router.get('/register/company', (req, res) => {
  res.render('registerCompany');
});
router.post('/company/create', CompanyController.Create);


router.get('/Allcompany', CompanyController.getAll)

export default router