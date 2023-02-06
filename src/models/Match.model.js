import { pool } from "../../db/db.js"

export class Match {
    //insertar las relaciones entre los aplicantes y las empresas 
    CreateMatch = async (req, res)=>{
        const {id_applicant, id_company} = req.body
        const [rows] = await pool.query('INSERT INTO servicematch (id_applicant, id_company) VALUES (?, ?)', [id_applicant, id_company])
        return 
    }

    // static table = 'ServiceMatch'

    // constructor(body) {
    //     this.#id_Applicant = body.id_Applicant,
    //         this.#id_Company = body.id_Company
    // }

    // set Id_Applicant(id_applicant) { this.#id_Applicant = id_applicant }
    // set Id_Company(id_company) { this.#id_Company = id_company }

    // get Id_Applicant() { return this.#id_Applicant }
    // get Id_Company() { return this.#id_Company }
}

export default Match