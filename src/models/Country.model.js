import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
import { pool } from "../../db/db.js";

class Country extends GeneralQuerySql{
    
    static table = 'Country'
    #name;
    
    constructor(body){
        super()
        this.#name = body.name;
    }

    set Name(name){ this.#name = name; }

    get Name(){ return this.#name; }
    
    create = async ()=>{
        const index = await pool.query('INSERT INTO country (name) VALUES (?)',[this.#name])
        return index[0]
    }
 
}

export default Country;