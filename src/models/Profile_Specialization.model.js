import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class Profile_specialization extends GeneralQuerySql{

    static table = 'profile_specialization';
    #id_profile_account;
    #id_specialization;

    constructor(body){
        super();
        this.#id_profile_account = body.id_profile_account;
        this.#id_specialization = body.id_specialization;
    }

    set id_profile_account(id_profile_account){ this.#id_profile_account = id_profile_account }
    set id_specialization(id_specialization){ this.#id_Specialization = id_specialization }

    get id_profile_account(){ return this.#id_profile_account }
    get id_specialization(){ return this.#id_specialization }

    async create(){
        const rows = await pool.query('INSERT INTO Profile_Specialization(id_profile_account, id_specialization) VALUES (?, ?)',[this.#id_profile_account, this.#id_specialization]);
        return rows[0];
    }

}

export default Profile_specialization