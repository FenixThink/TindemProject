import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
class Interest_area extends GeneralQuerySql{
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

    static indexInteresAplicant = async (params)=>{
        
        const profile = await pool.query('SELECT a.id,pa.name,pa.description,c.name AS ciudad , a.day_of_birth AS cumpleaños, i.name AS Area FROM profile_account pa INNER JOIN applicant a ON pa.id_user = a.id  INNER JOIN city c ON c.id = pa.id_city INNER JOIN profile_specialization ps ON pa.id = ps.id_profile_account INNER JOIN specific_interest si ON ps.id_specialization = si.id INNER JOIN interest_area i ON si.id_interest = i.id WHERE a.id = (?)',[params.id]);

        const interest = await pool.query('SELECT si.name AS interes FROM specific_interest si  INNER JOIN interest_area ia ON si.id_interest = ia.id INNER JOIN profile_specialization ps ON si.id = ps.id_specialization INNER JOIN profile_account pa ON pa.id = ps.id_profile_account WHERE pa.id_user = (?)',[params.id])
        console.log(interest[0]);
        return {profile,interest}
    }
}

export default Interest_area