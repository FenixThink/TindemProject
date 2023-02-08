import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class Company extends GeneralQuerySql{

    static table = 'Company'
    #NIT;
    #dayOfFounded;

    constructor(body){
        this.#NIT = body.NIT,
        this.#dayOfFounded = body.dayOfFounded
    }

    set NIT(NIT){ this.#NIT = NIT }
    set dayOfFounded(dayOfFounded){ this.#dayOfFounded = dayOfFounded }

    get NIT(){ return this.#NIT }
    get dayOfFounded(){ return this.#dayOfFounded }

    async create(){

        const insert = await pool.query('INSERT INTO company(NIT,day_of_founded) VALUES (?,?)',[this.#NIT, this.#dayOfFounded])        
        return insert[0]

    }

}

export default Company
