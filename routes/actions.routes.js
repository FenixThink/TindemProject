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
routerAction.get("/allAction/block/:id_applicant/:id_company",ActionController.BlockUser)
routerAction.get("/allAction/desblock/:id_applicant/:id_company",ActionController.DesblockUser)
routerAction.get("/allAction/RenderizadoBlock/:id_applicant/:id_company",ActionController.Rblock)

export default routerAction