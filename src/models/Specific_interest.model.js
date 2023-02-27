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


    static  findUserSpecializations = async (params)=>{

        const specific_interest = await pool.query('SELECT specific_interest.name AS specific_interest FROM specific_interest  WHERE specific_interest.id = (?)',[params.id])
         const findUserSpe = await pool.query(`SELECT  profile_account.name AS profile FROM specific_interest INNER JOIN profile_specialization ON specific_interest.id = profile_specialization.id_specialization INNER JOIN profile_account ON profile_account.id = profile_specialization.id_profile_account WHERE specific_interest.id = (?)`,[params.id] )

        return {specific_interest,findUserSpe}
    }

    static findId = async(name) =>{
        const [idSpecialization] = await pool.query('SELECT id FROM specific_interest WHERE name = ?',[name]);
        return idSpecialization[0].id
    }
    
    static async findinteresArea(id){
        const queryId = await pool.query(`SELECT *  FROM specific_interest WHERE id_interest = (?)`, [id])
        return queryId[0]
    }

    static async findAllApplicantsEmailWithSameInterest(specialization){
        const queryId = await pool.query(`SELECT applicant.id as id, u.email, profile_account.name, applicant.lastname, date_format(applicant.day_of_birth, "%d-%m-%Y") as day_of_birth, profile_account.img, profile_account.description, city.name as city FROM specific_interest INNER JOIN profile_specialization ON specific_interest.id = profile_specialization.id_specialization INNER JOIN profile_account ON profile_account.id = profile_specialization.id_profile_account INNER JOIN user_account as u ON profile_account.id_user = u.id INNER JOIN applicant ON profile_account.key_rol = applicant.id INNER JOIN city ON profile_account.id_city = city.id WHERE specific_interest.name = (?) AND profile_account.type='applicant'`, [specialization])
        return queryId[0]
    }

    
}

export default Specific_interest