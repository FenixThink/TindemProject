import { Router } from "express";
import { aspirantRegiser } from "../controllers/Aspirant.controller.js"

 const router = Router();

 router.get('/RegisterAspirant', aspirantRegiser);

