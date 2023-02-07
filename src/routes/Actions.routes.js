import { Router } from "express"
import ActionController from "../controllers/Actions.controllers.js"

const routerAction = Router()
const controller = new ActionController()

routerAction.post("/ActionsPost", controller.MatchCreate)

export default routerAction