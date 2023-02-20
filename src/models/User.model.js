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
        



        // return({
        //     id: insert.insertId
            
        // })

        return insert[0]

        

    }
    static AllEmail = async (id)=>{
        const search = await pool.query('SELECT user_account.email FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user INNER JOIN company ON profile_account.type = \'company\' AND profile_account.key_rol = company.id WHERE NOT EXISTS (SELECT * FROM actions WHERE actions.id_company = company.id AND actions.id_applicant = (?))',[id])
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