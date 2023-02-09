import {Router} from 'express'
import CompanyController from '../controllers/Company.controller.js';

const router = Router()

router.post('/company', CompanyController.Create)
router.get('/Allcompany', CompanyController.getAll)

export default router