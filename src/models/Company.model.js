import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class Company extends GeneralQuerySql{

    static table = 'Company'
    #NIT;
    #dayOfFounded;
    #id_Profile;

    constructor(body){
        this.#NIT = body.NIT,
        this.#dayOfFounded = body.dayOfFounded
        this.#id_Profile = body.id_Profile
    }

    set NIT(NIT){ this.#NIT = NIT }
    set dayOfFounded(dayOfFounded){ this.#dayOfFounded = dayOfFounded }
    set id_Profile(id_Profile){ this.#id_Profile = id_Profile }

    get NIT(){ return this.#NIT }
    get dayOfFounded(){ return this.#dayOfFounded }
    get id_Profile(){ return this.#id_Profile }

    async Create(){

        const insert = await pool.query('INSERT INTO COMPANY(NIT,dayOfFounded,id_Profile) VALUES (?,?,?)',[this.#NIT, this.#dayOfFounded, this.#id_Profile])        
        return insert[0]

    }

}

export default Company
