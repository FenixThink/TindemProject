import {pool} from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
class Applicant extends GeneralQuerySql{

    static table = 'applicant';
  
    #lastname;
    #day_of_birth;
    
    constructor(body){
        super();
        
        this.#lastname = body.lastname
        this.#day_of_birth = body.day_of_birth;
    }
    
    
    set lastname(lastname){this.#lastname =lastname}
    set day_of_birth(day_of_birth){ this.#day_of_birth = day_of_birth }

    
    
    get lastname(){return this.#lastname}
    get day_of_birth(){ return this.#day_of_birth }
    
    async create(){
        const rows = await pool.query(`INSERT INTO applicant(lastname,day_of_birth) VALUES (?,?)`,[this.#lastname,this.#day_of_birth])
        return rows[0];
    }

    static async update(lastname, day_of_birth, id){
        const query = "UPDATE applicant SET lastname = ?, day_of_birth = ? WHERE id = ?";
        const values = [lastname, day_of_birth, id];
        const result = await pool.query(query, values);
        return result.affectedRows;
    }
    
}

export default Applicant;