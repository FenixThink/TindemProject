import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
import { encrypt, compare } from "../helpers/Bcrypt.helper.js";
import jwt_decode from "jwt-decode";


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

        const passwordHash = await encrypt(this.#password)
        const insert = await pool.query('INSERT INTO user_account(email,password) VALUES(?,?)',[this.#email, passwordHash])
        

        console.log(passwordHash)
        

        // return({
        //     id: insert.insertId
            
        // })

        return insert[0]

        

    }
    static AllEmail = async (type)=>{
        const search = await pool.query('SELECT email FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user WHERE profile_account.type = (?)',[type])
        return search[0]
    }

    searchType = async (email)=>{
        const search = await pool.query('SELECT type FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user WHERE user_account.email = (?)',[email])
        return search[0]
    }
    static validationToken = async (tokencito)=>{
        const token = tokencito;
        const decoded = jwt_decode(token);
        return decoded
    }

    
}

export default User;