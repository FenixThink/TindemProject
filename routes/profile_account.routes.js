import {Router} from 'express'
import ProfileAccountController from '../src/controllers/ProfileAccount.controller.js';

const router = Router()

router.post('/profile', ProfileAccountController.create)
router.get('/profile',ProfileAccountController.getAll)
router.get('/profile/:id',ProfileAccountController.findOne)

export default router