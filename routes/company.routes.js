import { Router } from 'express'
import CompanyController from '../src/controllers/Company.controller.js';

const router = Router()

router.get('/register/company', function(req, res, next) {
    res.render('registerCompany');
  }); 
router.post('/company/create', CompanyController.Create)
router.patch("/company/:id", CompanyController.companyUpdate);
router.get('/Allcompany', CompanyController.getAll)
router.get('/company/:id', CompanyController.findOne)

export default router