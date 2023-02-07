import {pool} from "../../db/db.js";
class Applicant{

    #day_of_birth;
    
    // static table = 'applicant'
    
    constructor(body){
        this.#day_of_birth = body.day_of_birth
    }
    
    set day_of_birth(day_of_birth){ this.#day_of_birth = day_of_birth }

    get day_of_birth(){ return this.#day_of_birth }
    
    async createApplicant(){
        const rows = await pool.query(`INSERT INTO applicant(day_of_birth) VALUES (?)`,[this.#day_of_birth])
        return rows[0];
    }
}

export default Applicant;