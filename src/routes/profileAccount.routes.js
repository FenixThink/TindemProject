import {Router} from 'express'
import ProfileAccountController from '../controllers/ProfileAccount.controller.js';

const router = Router()

router.post('/profile', ProfileAccountController.create)

router.get('/allprofileaccount',ProfileAccountController.getAll)

export default router