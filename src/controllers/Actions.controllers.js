import Actions from "../models/Actions.model.js";





class ActionController  {
    //control de errores con try catch
     ActionCreate = async (req, res)=>{
        try {
            const Action = new Actions(req.body)
            const result = Action.Create()
            res.send("success full")
        } catch (error) {
            console.log(error)
            res.send(error.message)
        }
    }
}

export default ActionController