import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
class Interest_area extends GeneralQuerySql{
    #name;

    static table = 'interest_area'
    
    constructor(body){
        this.#name = body.name
    }

    set Name(name){ this.#name = name }
    
    get Name(){ return this.#name }
    
    create = async ()=>{
        const index = await pool.query('INSERT INTO interest_area (name) VALUES (?)',[this.#name])
        return 
    }
}

export default Interest_area