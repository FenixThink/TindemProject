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
            res.status(200).json({
                message: 'success full'
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
    static updateActionMatch = async (req,res) =>{
        try {
            const result = await Actions.updateAM(req.params);
        }catch (error){
            res.status(500).json({
                message: error.message
            })
        }
    }
    static FindOneAC = async (req,res) =>{
        try {
            const result = await Actions.FindOneCA(req.params);
            if (result.length <= 0){
                res.status(404).json({
                message: 'Actions not found'
                })
                return
            }
            res.status(200).json({
                message: result
            })
            return
        }catch (error){
            res.status(500).json({
                message: 'errocito marica'
            })
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

    static DeleteChat = async(req, res) => {
        try {
            const respuesta = await Actions.DeleteChat(req, res)
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


    static BlockUser = async(req, res ) => {
        try {
            console.log("a")
            const respuesta = await Actions.BlockUser(req.params.id_applicant,req.params.id_company)
            if (res.length <= 0) res.status(404).json({
                message: 'Action not valided'
            })
            res.status(200).json({
                "message":"Actualizado"
            })
        } catch (error) {
            console.log(error)
            res.send({
                "status": 404,
                "message": error.message
            });
        }
    }

    static DesblockUser = async(req, res ) => {
        try {
            const respuesta = await Actions.DesblockUser(req.params.id_applicant,req.params.id_company)
            if (res.length <= 0) res.status(404).json({
                message: 'Action not valided'
            })
            res.send(respuesta)
        } catch (error) {
            console.log(error)
            res.send({
                "status": 404,
                "message": error.message
            });
        }
    }

    static Rblock = async(req, res ) => {
        try {
            const respuesta = await Actions.Rblock(req.params)
            if (res.length <= 0) res.status(404).json({
                message: 'Action not valided'
            })
            res.json(respuesta)
        } catch (error) {
            console.log(error)
            res.send({
                "status": 404,
                "message": error.message
            });
        }
    }
    
}

export default ActionController