import {Router} from './Router';
import Company from '../controllers/Company.controller.js';
const router = Router();

router.get('/Company/Register',Company.companyRegister);