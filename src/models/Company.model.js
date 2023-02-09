import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class Company extends GeneralQuerySql{

    static table = 'company';
    #NIT;
    #day_of_founded;

    constructor(body){
        this.#NIT = body.NIT;
        this.#day_of_founded = body.day_of_founded;
    }

    set NIT(NIT){ this.#NIT = NIT }
    set day_of_founded(day_of_founded){ this.#day_of_founded = day_of_founded }

    get NIT(){ return this.#NIT }
    get day_of_founded(){ return this.#day_of_founded }

    async create(){

        const insert = await pool.query('INSERT INTO company(NIT,day_of_founded) VALUES (?,?)',[this.#NIT, this.#day_of_founded])        
        return insert[0]

    }

}

export default Company
