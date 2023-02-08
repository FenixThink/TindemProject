import { Router } from "express"
import ActionController from "../controllers/Actions.controllers.js"

const routerAction = Router()
const controller = new ActionController()

routerAction.post("/ActionsPost", controller.ActionCreate)

export default routerAction