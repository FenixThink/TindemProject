import { Router } from "express"
import chatsmodel from "../src/models/Chats.js"


const routerChats = Router()

routerChats.post("/chats",(req,res)=>{
    console.log(req.body)
    const chat = chatsmodel(req.body)
    chat.save().then((data)=>res.json(data))
})

export default routerChats