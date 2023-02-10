import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class Interest_area extends GeneralQuerySql{
    
    static table = 'interest_area';
    #name;
    
    constructor(body){
        super();
        this.#name = body.name;
    }

    set name(name){ this.#name = name }
    
    get name(){ return this.#name }
    
    create = async ()=>{
        const index = await pool.query('INSERT INTO interest_area (name) VALUES (?)',[this.#name])
        return index[0]
    }

    static indexInteresAplicant = async (params)=>{
        
        const profile = await pool.query('SELECT DISTINCT pa.id_user AS ID, pa.name, a.lastname,pa.description, c.name AS city,p.name AS Country, date_format(a.day_of_birth, "%d-%m-%Y") AS day_of_birth, pa.type FROM profile_account pa INNER JOIN applicant a ON pa.key_rol= a.id INNER JOIN city c ON pa.id_city = c.id INNER JOIN country p ON c.id_country = p.id INNER JOIN user_account ua ON pa.id_user = ua.id WHERE ua.email =  (?)',[params.email]);
        
        const area = await pool.query('SELECT DISTINCT ia.name FROM interest_area ia INNER JOIN specific_interest si ON ia.id = si.id_interest INNER JOIN profile_specialization ps ON si.id = ps.id_specialization INNER JOIN profile_account pa ON ps.id_profile_account = pa.id INNER JOIN user_account ua ON pa.id_user = ua.id WHERE ua.email = (?)',[params.email]);

        const interest = await pool.query('SELECT si.name AS interes, ia.name AS Area FROM specific_interest si  INNER JOIN interest_area ia ON si.id_interest = ia.id INNER JOIN profile_specialization ps ON si.id = ps.id_specialization INNER JOIN profile_account pa ON pa.id = ps.id_profile_account INNER JOIN user_account ua ON pa.id_user = ua.id WHERE ua.email= (?) ',[params.email])
        
        const element = {};
        for (let i = 0; i < area[0].length; i++) {
            const name = area[0][i].name
            element[name] = []
            
        }

        for(let i = 0; i < area[0].length; i++) {
            for (let a = 0; a < interest[0].length; a++) {
                if(area[0][i].name === interest[0][a].Area){
                    element[area[0][i].name].push(interest[0][a].interes)
                }
            }
        }
        return {profile,area,interest,element}
    }

}

export default Interest_area