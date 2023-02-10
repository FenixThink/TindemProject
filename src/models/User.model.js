import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";


class User extends GeneralQuerySql{
   
    static table = 'user_account';
    #email;
    #password;

    constructor(body){
        super();
        this.#email = body.email;
        this.#password = body.password;
    }

    set email(email){ this.#email = email }
    set password(password){ this.#password =  password }

    get email(){ return this.#email }
    get password(){ return this.#password }

    create = async()=>{

        const insert = await pool.query('INSERT INTO user_account(email,password) VALUES(?,?)',[this.#email,this.#password])

        

        // return({
        //     id: insert.insertId
            
        // })

        return insert[0]

    }

    searchType = async (email)=>{
        const search = await pool.query('SELECT type FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user WHERE user_account.email = (?)',[email])
        return search[0]
    }

}

export default User;