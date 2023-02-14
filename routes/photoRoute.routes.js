
import { Router } from 'express'
import multer from '../public/libs/multer.js';


const router = Router()



router.post('/photos', multer.single('image'))

export default router