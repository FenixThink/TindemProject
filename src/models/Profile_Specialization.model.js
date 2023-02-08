import { pool } from "../../db/db.js"

class Profile_Specialization{
    #id_Profile_Account;
    #id_Specialization;
    static table = 'Profile_Specialization'

    constructor(body){
        this.#id_Profile_Account = body.id_Profile_Account
        this.#id_Specialization = body.id_Specialization
    }

    set Id_Profile_Account(id_Profile_Account){ this.#id_Profile_Account = id_Profile_Account }
    set Id_Specialization(id_Specialization){ this.#id_Specialization = id_Specialization }

    get Id_Profile_Account(){ return this.#id_Profile_Account }
    get Id_Specialization(){ return this.#id_Specialization }

    create(){
        const [rows] = pool.query('INSERT INTO tindem (id_profile_account, id_specialization) VALUES (?, ?)',
        [this.#id_Profile_Account, this.#id_Specialization]);
        return rows;
    }

}

export default Profile_Specialization