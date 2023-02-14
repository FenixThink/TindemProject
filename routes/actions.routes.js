import { Router } from "express"
import ActionController from "../src/controllers/Actions.controllers.js"

const routerAction = Router()
// const controller = new ActionController()

// routerAction.post("/ActionsPost",ActionController.ActionCreate)

routerAction.get("/allAction/a",ActionController.getAll)
routerAction.get("/allAction/:id",ActionController.ActionId)
routerAction.delete('/allAction/deleteChats',ActionController.DeleteChat)
routerAction.get("/allAction/applicant/:id",ActionController.FindOneA)
routerAction.get("/allAction/company/:id",ActionController.FindOneC)


export default routerAction