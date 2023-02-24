import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

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
        const rows = await pool.query('INSERT INTO actions (action_time, action, action_author, action_match, id_applicant, id_company) VALUES (?, ?, ?, ?, ?, ?)', [this.#action_time, this.#action, this.#action_author, this.#action_match, this.#id_applicant, this.#id_company])
        return rows[0]
    }

    static async FindOneA(id){
        const [queryname] = await pool.query(`SELECT p.name FROM profile_account p WHERE key_rol = (?) AND p.type = "applicant"`, [id])
        const queryId = await pool.query(`SELECT ac.action, p.name AS name_company, co.id AS id_company  FROM actions ac INNER JOIN profile_account p ON ac.id_company = p.key_rol AND p.type = "company" AND action_match = 1 INNER JOIN applicant ap ON ap.id = ac.id_applicant INNER JOIN company co ON co.id = ac.id_company WHERE ac.id_applicant = (?)`, [id])
        return {name:queryname[0], consulta:queryId[0]}
    }

    static async FindOneC(id){
        const [queryname] = await pool.query(`SELECT p.name  FROM profile_account p  WHERE key_rol = (?) AND p.type = "company"`, [id])
        console.log(id)
        const queryId = await pool.query(`SELECT ac.action, p.name AS name_applicant,ap.id AS id_applicant  FROM actions ac INNER JOIN profile_account p ON ac.id_applicant = p.key_rol AND p.type = "applicant" AND action_match = 1 INNER JOIN company ap ON ap.id = ac.id_applicant INNER JOIN company co ON co.id = ac.id_company WHERE ac.blocked_status = 0 AND ac.id_company = (?)`, [id])
        console.log(queryId[0])
        return {name:queryname[0], consulta:queryId[0]}

    }
    
    static async DeleteChat(req, res){
        const {id_company,id_applicant} = req.body;
        const rows = await pool.query(`DELETE FROM actions where actions.id_company = (?) AND action_match = 1 AND actions.id_applicant = (?)`, [id_company, id_applicant])
        return "Eliminado exitoso"
    } 

    static async BlockUser(id_applicant,id_company){
        console.log(id_applicant,id_company)
        const rows = await pool.query(`UPDATE actions a SET a.blocked_status = 1 WHERE a.id_applicant = (?) AND a.id_company = (?)`, [id_applicant, id_company])
        return "Actualizado exitoso"
    }

    static async DesblockUser(id_applicant,id_company){

        const rows = await pool.query(`UPDATE actions a SET a.blocked_status = 0 WHERE a.id_applicant = (?) AND a.id_company = (?)`, [id_applicant, id_company])
        return "Actualizado exitoso"    
    }

    static async Rblock(id){
        const id_applicant = id.id_applicant;
        const id_company = id.id_company;

        const rows = await pool.query(`SELECT a.blocked_status FROM actions a WHERE a.id_applicant = (?) AND a.id_company = (?) AND a.action_match = 1`, [id_applicant, id_company])
        return rows[0]
    }

}

export default Actions