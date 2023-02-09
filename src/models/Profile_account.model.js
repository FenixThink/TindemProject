import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class Profile_account extends GeneralQuerySql{

    static table = 'profile_account';   
    #name;
    #description;
    #type;
    #key;
    #id_user;
    #id_city;
    
    constructor(body){
        super();
        this.#name = body.name;
        this.#description = body.description;
        this.#type = body.type;
        this.#key = body.key;
        this.#id_user = body.id_user;
        this.#id_city = body.id_city;
    }

    set name(name){ this.#name=name }
    set description(description){ this.#description=description }
    set type(type){ this.#type=type }
    set key(key){ this.#key=key }
    set id_user(id_user){ this.#id_user=id_user }
    set id_city(id_city){ this.#id_city=id_city }

    get name(){ return this.#name }
    get description(){ return this.#description }
    get type(){ return this.#type }
    get key(){ return this.#key }
    get id_user(){ return this.#id_user }
    get id_city(){ return this.#id_city }

    async create(){

        const insert = await pool.query('INSERT INTO profile_account (name, description, type, key_rol, id_user, id_city) VALUES (?,?,?,?,?,?)',[this.#name, this.#description,this.#type,this.#key,this.#id_user,this.#id_city])        
        return insert[0];

    }

}

export default Profile_account;