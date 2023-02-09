import { Router } from "express";
import CountryController from "../controllers/Country.controllers.js";

const routerCountry = Router();
console.log("hola")

routerCountry.post('/contry/create',CountryController.createContry())
console.log("hola mundo")
export default routerCountry
