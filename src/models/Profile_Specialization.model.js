import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class Profile_specialization extends GeneralQuerySql{

    static table = 'profile_specialization';
    #id_Profile_Account;
    #id_Specialization;

    constructor(body){
        super();
        this.#id_Profile_Account = body.idProfileAccount;
        this.#id_Specialization = body.idSpecialization;
    }

    set id_Profile_Account(idProfileAccount){ this.#id_Profile_Account = idProfileAccount }
    set id_Specialization(idSpecialization){ this.#id_Specialization = idSpecialization }

    get id_Profile_Account(){ return this.#id_Profile_Account }
    get id_Specialization(){ return this.#id_Specialization }

    async create(){
        const rows = await pool.query('INSERT INTO Profile_Specialization(id_profile_account, id_specialization) VALUES (?, ?)',[this.#id_Profile_Account, this.#id_Specialization]);
        return rows[0];
    }

}

export default Profile_specialization