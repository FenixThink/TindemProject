import { Router } from "express"
import ActionController from "../src/controllers/Actions.controllers.js"

const routerAction = Router()
// const controller = new ActionController()

routerAction.post("/ActionsCreate",ActionController.ActionCreate)

routerAction.get("/allAction/a",ActionController.getAll)
routerAction.get("/allAction/:id",ActionController.ActionId)
routerAction.delete('/allAction/deleteChats',ActionController.DeleteChat)
routerAction.get("/allAction/applicant/:id",ActionController.FindOneA)
routerAction.get("/allAction/company/:id",ActionController.FindOneC)
routerAction.get("/allAction/:idCompany/:idApplicant",ActionController.FindOneAC)
routerAction.put("/allAction/update/:idCompany/:idApplicant",ActionController.updateActionMatch)


export default routerAction