
import { Router } from 'express'
import multer from '../public/libs/multer.js';
import CompanyController from '../src/controllers/Company.controller.js';


const router = Router()

router.post('/photos', multer.single('image'), CompanyController.Create)

export default router