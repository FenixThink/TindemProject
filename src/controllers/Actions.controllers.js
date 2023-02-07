import Actions from "../models/Actions.model.js";

const Action = new Actions()

class ActionController {
    MatchCreate = async (req, res)=>{
        try {
            const result = await Action.CreateMatch(req, res)
            res.send("success full")
        } catch (error) {
            res.send(error.message)
        }
    }
}

export default ActionController