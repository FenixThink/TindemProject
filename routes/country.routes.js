import { Router } from "express";
import CountryController from "../src/controllers/Country.controllers.js";
import multer from '../public/libs/multer.js';

const routerCountry = Router();

routerCountry.post('/contry/create',CountryController.createContry)
routerCountry.get('/contry/:id',CountryController.CountryId)
routerCountry.get('/country/get',CountryController.getAll)

export default routerCountry
