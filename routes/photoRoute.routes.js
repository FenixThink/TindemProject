
import { Router } from 'express'
import CompanyController from '../src/controllers/Company.controller.js';


const router = Router()

router.post('/photos', CompanyController.Create)

export default router