import Actions from "../models/Actions.model.js";

class ActionController {
    //control de errores con try catch
    static ActionCreate = async (req, res)=>{
        try {
            const Action = new Actions(req.body)
            const result = Action.create()
            if (result.affectedRows <= 0) res.status(404).json({
                message: 'missing fields to fill'
            })
            res.send("success full")
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }

    static ActionId = async(req, res) => {
        try {
           const result = await Actions.FindOne(req.params.id);
           if (result.length <= 0) res.status(404).json({
            message: 'Action not found'
        }) 
           res.send(result);
        } catch (error) {
            console.log(error)
            res.send({
                "status" : 404,
                "message" : error.message
            });
        };
    }

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Actions.All()
            if (respuesta.length <= 0) res.status(404).json({
                message: 'Actions not found'
            })
            res.send(respuesta)
        }catch(error){
            console.log(error)
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

    static FindOneA = async(req, res)=>{
        try{
            const respuesta = await Actions.FindOneA(req.params.id)
            if (respuesta.length <= 0) res.status(404).json({
                message: 'Action not found'
            })
            res.send(respuesta)
        }catch(error){
            console.log(error)
            return res.send({
                "status":404,
                "message":error.message
            })
        }
    }

    static FindOneC = async(req, res) => {
        try {
            const respuesta = await Actions.FindOneC(req.params.id)
            if (respuesta.length <= 0) res.status(404).json({
                message: 'Action not found'
            })
            res.send(respuesta)
        } catch (error) {
            console.log(error)
            res.send({
                "status": 404,
                "message": error.message
            });
        };
    }

}

export default ActionController