import {Router} from './Router';
import CompanyController from '../controllers/Company.controller.js';
const router = Router();

router.get('/Company/Register',CompanyController.companyRegister);
router.post('/Company/Create',CompanyController.Create());