import { pool } from "../../db/db.js";

class Country{
    #name;
    static table = 'Country'
    
    constructor(body){
        this.#name = body.name;
    }

    set Name(name){ this.#name = name; }

    get Name(){ return this.#name; }
    
    create = async ()=>{
        const index = await pool.query('INSERT INTO country (name) VALUES (?)',[this.#name])
        return 
    }
 
}

export default Country;