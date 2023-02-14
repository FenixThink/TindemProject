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

    static #area = async (params)=>{
        const area = await pool.query('SELECT DISTINCT ia.name FROM interest_area ia INNER JOIN specific_interest si ON ia.id = si.id_interest INNER JOIN profile_specialization ps ON si.id = ps.id_specialization INNER JOIN profile_account pa ON ps.id_profile_account = pa.id INNER JOIN user_account ua ON pa.id_user = ua.id WHERE ua.email = (?)',[params.email]);

        return area[0]
    }
    
    static interest = async (params)=>{
        const interest = await pool.query('SELECT si.name AS interes, ia.name AS Area FROM specific_interest si  INNER JOIN interest_area ia ON si.id_interest = ia.id INNER JOIN profile_specialization ps ON si.id = ps.id_specialization INNER JOIN profile_account pa ON pa.id = ps.id_profile_account INNER JOIN user_account ua ON pa.id_user = ua.id WHERE ua.email= (?) ',[params.email])

        return interest[0]
    }
        
    static indexInteresAplicant = async (params)=>{
        
        const profile = await pool.query('SELECT DISTINCT pa.id_user AS ID, pa.name, a.lastname,pa.description, c.name AS city,p.name AS Country, date_format(a.day_of_birth, "%d-%m-%Y") AS day_of_birth, pa.type FROM profile_account pa INNER JOIN applicant a ON pa.key_rol= a.id INNER JOIN city c ON pa.id_city = c.id INNER JOIN country p ON c.id_country = p.id INNER JOIN user_account ua ON pa.id_user = ua.id WHERE ua.email =  (?)',[params.email]);

        return profile[0]
    }

    static indexInteresCompany = async (params)=>{

        const interest = await pool.query('SELECT DISTINCT pa.id_user AS ID, pa.name, co.nit AS nit ,pa.description, c.name AS city,p.name AS Country, date_format(co.day_of_founded, "%d-%m-%Y") AS day_of_founded, pa.type FROM profile_account pa INNER JOIN company co ON pa.key_rol= co.id INNER JOIN city c ON pa.id_city = c.id INNER JOIN country p ON c.id_country = p.id INNER JOIN user_account ua ON pa.id_user = ua.id WHERE ua.email = (?) ',[params.email])

        return interest[0]
    }

    static InteresArea =  async (params)=>{
        
        const element = {};
        const area = await this.#area(params)
        const interes = await this.interest(params)
            
            for (let i = 0; i < area.length; i++) {
                    const name = area[i].name
                    element[name] = []
            }
                
            for(let i = 0; i < area.length; i++) {
                for (let a = 0; a < interes.length; a++) {
                        if(area[i].name === interes[a].Area){
                                element[area[i].name].push(interes[a].interes)
                            }
                        }
            }
                            
        return element
    }
}

export default Interest_area