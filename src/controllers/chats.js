import chatsmodel from "../models/Chats.js"

class chatsController{

    static getAllChats = async (req,res)=>{
        const chat = await chatsmodel.find()
        res.send(chat)
    }


    static getChatIdUserApplicant = async (req,res)=>{
        const chat = await chatsmodel.find({idApplicant:req.body.idApplicant})
        res.send(chat)
    }

    static getChatIdUserCompany = async (req,res)=>{
        const chat = await chatsmodel.find({idCompany:req.params.idCompany})
        res.send(chat)
    }

}
//const obtenerChats = async (req,res)=>{
//     const chat = await chatsmodel.find()
//     chatsmodel.countDocuments({},(err,total)=>{
//         if(err){
//             return res.json({
//                 status:400,
//                 mensaje: "Error al leer el archivo",
//                 err

//             })
//         }

//         res.json({status:200,total,chat})
//     })
// }

export default chatsController