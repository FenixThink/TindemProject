import { Router } from "express";
import CountryController from "../controllers/Country.controllers.js";

const routerCountry = Router();

routerCountry.post('/contry/create',CountryController.createContry())
routerCountry.get('/contry/create',CountryController.getAll())

export default routerCountry
