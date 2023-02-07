import { pool } from "../../db/db";
class Interest_area{
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