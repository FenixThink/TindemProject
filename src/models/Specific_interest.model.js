import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class Specific_interest extends GeneralQuerySql{

    static table = 'specific_interest';
    #name;
    #id_interest;

    constructor(body){
        super();
        this.#name = body.name;
        this.#id_interest = body.id_interest;
    }

    set name(name){this.#name = name}
    set id_interest(id_interest){ this.#id_interest = id_interest}

    get name(){return this.#name}
    get id_interest(){ return this.#id_interest}

    create = async ()=>{
        const rows = await pool.query('INSERT INTO specific_interest(name, id_interest) VALUES (?, ?)',[this.#name, this.#id_interest])
        return rows[0]
    }

}

export default Specific_interest