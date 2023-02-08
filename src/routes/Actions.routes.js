import { Router } from "express"
import ActionController from "../controllers/Actions.controllers.js"

const routerAction = Router()
// const controller = new ActionController()

routerAction.post("/ActionsPost",ActionController.ActionCreate)

routerAction.get("/allAction/a",ActionController.getAll)
routerAction.get("/allAction/:id",ActionController.ActionId)

export default routerAction