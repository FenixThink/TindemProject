import chatsmodel from "../models/Chats.js"

class chatsController{

    static getAll = async (req,res)=>{
        const chat = await chatsmodel.find()
        res.send(chat)
    }

}
// const obtenerChats = async (req,res)=>{
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