import { Router } from "express"
import MatchController from "../controllers/Match.controllers.js"

const routerMatch = Router()
const controller = new MatchController()

routerMatch.post("/MatchPost", controller.MatchCreate)

export default routerMatch