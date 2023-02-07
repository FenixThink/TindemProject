import Match from "../models/Match.model.js";

const Matchs = new Match()

class MatchController {
    MatchCreate = async (req, res)=>{
        try {
            const result = await Matchs.CreateMatch(req, res)
            res.send("success full")
        } catch (error) {
            res.send(error.message)
        }
    }
}

export default MatchController