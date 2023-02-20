import { Router } from "express";
import CountryController from "../src/controllers/Country.controllers.js";
import multer from '../public/libs/multer.js';

const routerCountry = Router();

routerCountry.post('/contry/create', multer.single('image'),CountryController.createContry)
routerCountry.get('/contry/:id',CountryController.CountryId)
routerCountry.get('/contry/get',CountryController.getAll)

export default routerCountry
