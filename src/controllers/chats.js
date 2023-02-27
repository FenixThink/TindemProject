import chatsmodel from "../models/Chats.js"

class chatsController{

    static getAllChats = async (req,res)=>{
        const chat = await chatsmodel.find()
        res.send(chat)
    }


    static getChatIdUserApplicant = async (req,res)=>{
        const chat = await chatsmodel.find({idApplicant:req.params.idApplicant})
        res.send(chat)
    }

    static getChatIdUserCompany = async (req,res)=>{
        const chat = await chatsmodel.find({idCompany:req.params.idCompany})
        res.send(chat)
    }

    static getChatscompanyapplicant = async (req,res)=>{
        try{

            const chat = await chatsmodel.find({idCompany:req.params.idCompany,idApplicant:req.params.idApplicant})
            res.status(200).json({
                "Message":chat
            })
            return chat
        }catch(e){
            res.status(500).json({
                "Messsage":"Something goes wrong"
            })
        }
    }

}


export default chatsController