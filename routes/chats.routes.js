import { Router } from "express"
import chatsmodel from "../src/models/Chats.js"

import chatsController from "../src/controllers/chats.js"


const routerChats = Router()

routerChats.post("/chats",(req,res)=>{
    console.log(req.body)
    const chat = chatsmodel(req.body)
    chat.save().then((data)=>res.json(data))
})

routerChats.get('/obtenerChats',chatsController.getAllChats)

routerChats.get('/obtenerChatIDApplicant/:idApplicant',chatsController.getChatIdUserApplicant)

routerChats.get('/getChatIdUserCompany/:idCompany',chatsController.getChatIdUserCompany)

routerChats.get('/getChatscompanyapplicant/:idApplicant/:idCompany',chatsController.getChatscompanyapplicant)

export default routerChats