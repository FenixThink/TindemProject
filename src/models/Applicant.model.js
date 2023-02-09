import {pool} from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
class Applicant extends GeneralQuerySql{

    static table = 'applicant';
    #day_of_birth;
    
    constructor(body){
        super();
        this.#day_of_birth = body.day_of_birth;
    }
    
    set day_of_birth(day_of_birth){ this.#day_of_birth = day_of_birth }

    get day_of_birth(){ return this.#day_of_birth }
    
    async create(){
        const rows = await pool.query(`INSERT INTO applicant(day_of_birth) VALUES (?)`,[this.#day_of_birth])
        return rows[0];
    }
    
}

export default Applicant;