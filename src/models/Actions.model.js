import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

export class Actions extends GeneralQuerySql{
    //insertar las relaciones entre los aplicantes y las empresas 
    static table = 'actions'
    #action_time; 
    #action; 
    #action_author; 
    #action_match;
    #id_applicant; 
    #id_company;

    constructor(body) {
        this.#action_time = body.action_time,
        this.#action = body.action
        this.#action_author = body.action_author,
        this.#action_match = body.action_match
        this.#id_applicant = body.id_applicant,
        this.#id_company = body.id_company
    }

    set action_time(action_time){ this.#action_time = action_time }
    set action(action){ this.#action = action }
    set action_author(action_author){ this.#action_author = action_author }
    set action_match(action_match){ this.#action_match = action_match }
    set id_applicant(id_applicant){ this.#id_applicant = id_applicant }
    set id_company(id_company){ this.#id_company = id_company }

    get action_time(){ return this.#action_time }
    get action(){ return this.#action }
    get action_author(){ return this.#action_author }
    get action_match(){ return this.#action_match }
    get id_applicant(){ return this.#id_applicant }
    get id_company(){ return this.#id_company }

    create = async ()=>{
        const [rows] = await pool.query('INSERT INTO actions (action_time, action, action_author, action_match, id_applicant, id_company) VALUES (?, ?, ?, ?, ?, ?)', [this.#action_time, this.#action, this.#action_author, this.#action_match, this.#id_applicant, this.#id_company])
        return rows[0]
    }

}

export default Actions