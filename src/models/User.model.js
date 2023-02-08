import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";


class User extends GeneralQuerySql{
   
    static table = 'user_account'
    #email;
    #password;

    constructor(body){
        super()
        this.#email = body.email;
        this.#password = body.password;
    }

    set Email(email){ this.#email = email }
    set Password(password){ this.#password =  password }

    get Email(){ return this.#email }
    get Password(){ return this.#password }

    createUser =async()=>{

        const insert = await pool.query('INSERT INTO user_account(email,password) VALUES(?,?)',[this.#email,this.#password])

        return insert[0]
   

    }






}

export default User;