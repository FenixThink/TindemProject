import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
import { encrypt, compare } from "../helpers/Bcrypt.helper.js";
import jwt_decode from "jwt-decode";


class User extends GeneralQuerySql{
   
    static table = 'user_account';
    #id_user;
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

    
    async lastUser(email){
        const [user] = await pool.query('SELECT u.id FROM user_account u WHERE u.email = (?)',[email]);
        this.#id_user = user[0].id;
        return this.#id_user;
    }

    create = async()=>{

        const passwordHash = await encrypt(this.#password)
        console.log(passwordHash)
        const insert = await pool.query('INSERT INTO user_account(email,password) VALUES(?,?)',[this.#email, passwordHash])
        

        //console.log(passwordHash)
        

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
        const search = await pool.query('SELECT user_account.id,type FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user WHERE user_account.email = (?)',[email])
        return search[0]
    }
    static validationToken = async (tokencito)=>{
        const token = tokencito;
        const decoded = jwt_decode(token);
        return decoded
    }

    static async update(email,password,id){
        const query = "UPDATE user_account SET email = ?, password = ? WHERE id = ?";
        const values = [email,password,id];
        const result = await pool.query(query, values);
        return result.affectedRows;
    }
}

export default User;