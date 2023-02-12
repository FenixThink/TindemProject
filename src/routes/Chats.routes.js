import { Router } from "express"
import chatsmodel from "../models/Chats.js"


const routerChats = Router()

routerChats.post("/chats",(req,res)=>{
    const chat = chatsmodel(req.body)
    chat.save().then((data)=>res.json(data))
})

export default routerChats