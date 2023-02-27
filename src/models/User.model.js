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
        const insert = await pool.query('INSERT INTO user_account(email,password) VALUES(?,?)',[this.#email, passwordHash])
        



        // return({
        //     id: insert.insertId
            
        // })

        return insert[0]

        

    }
    static AllEmailCompany = async (id)=>{
        const search = await pool.query('SELECT DISTINCT user_account.email FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user INNER JOIN company ON company.id = profile_account.key_rol WHERE profile_account.type = \'company\' AND user_account.email NOT IN (SELECT DISTINCT email FROM actions INNER JOIN company ON actions.id_company = company.id INNER JOIN profile_account ON company.id = profile_account.key_rol INNER JOIN user_account ON profile_account.id_user = user_account.id WHERE actions.id_applicant = (?) AND actions.action IN (\'like\', \'dislike\') AND profile_account.type = \'company\' AND actions.action_author = \'applicant\');',[id])
        return search[0]
    }
    static AllEmailApplicant = async (id)=>{
        const search = await pool.query('SELECT DISTINCT user_account.email FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user INNER JOIN company ON company.id = profile_account.key_rol WHERE profile_account.type = \'applicant\' AND user_account.email NOT IN (SELECT DISTINCT email AS showmeEmailsApplicant FROM actions INNER JOIN applicant ON actions.id_applicant = applicant.id INNER JOIN profile_account ON applicant.id = profile_account.key_rol INNER JOIN user_account ON profile_account.id_user = user_account.id WHERE actions.id_company = (?) AND actions.action IN (\'like\', \'dislike\') AND profile_account.type = \'applicant\' AND actions.action_author = \'company\');',[id])
        return search[0]
    }


    searchType = async (email)=>{
        const search = await pool.query('SELECT user_account.id,type FROM user_account INNER JOIN profile_account ON user_account.id = profile_account.id_user WHERE user_account.email = (?)',[email])
        return search[0]
    }
    searchId = async (type,email)=>{
            const search = await pool.query( `SELECT ${type}.id FROM user_account INNER JOIN profile_account ON profile_account.id_user = user_account.id INNER JOIN ${type} ON ${type}.id = profile_account.key_rol WHERE user_account.email = '${email}';`)
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
    static updateMatch = async (params)=>{
        const query = await pool.query('CALL update_match((?),(?));',[params.idApplicant,params.idCompany]);
        return query[0]
    }
    static validateMatch = async (params)=>{
        const query = await pool.query('SELECT action_match FROM `actions` WHERE id_applicant = (?) AND id_company = (?) ',[params.idApplicant,params.idCompany]);
        return query[0]
    }
}

export default User;