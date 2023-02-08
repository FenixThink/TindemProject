import Actions from "../models/Actions.model.js";



class ActionController {
    //control de errores con try catch
    static ActionCreate = async (req, res)=>{
        try {
            const Action = new Actions(req.body)
            const result = Action.Create()
            res.send("success full")
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Actions.All()
            res.send(respuesta)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }


}

export default ActionController