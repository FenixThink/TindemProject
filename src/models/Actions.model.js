import { pool } from "../../db/db.js"

export class Actions {
    //insertar las relaciones entre los aplicantes y las empresas 
    CreateMatch = async (req, res)=>{
        const {action_time, action, action_author, action_match, id_applicant, id_company} = req.body
        const [rows] = await pool.query('INSERT INTO actions (action_time, action, action_author, action_match, id_applicant, id_company) VALUES (?, ?, ?, ?, ?, ?)', [action_time, action, action_author, action_match, id_applicant, id_company])
        return 
    }
}

export default Actions