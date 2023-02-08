import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class ProfileAcocunt extends GeneralQuerySql{

    static table = 'profile_account'   

    #name 
    #description
    #type
    #key
    #id_User
    #id_City
    
    constructor(body){
        super();
        this.#name = body.name;
        this.#description = body.description;
        this.#type = body.type;
        this.#key = body.key;
        this.#id_User = body.id_User;
        this.#id_City = body.id_City;
    }

    set name(name){ this.#name=name }
    set description(description){ this.#description=description }
    set type(type){ this.#type=type }
    set key(key){ this.#key=key }
    set id_User(id_User){ this.#id_User=id_User }
    set id_City(id_City){ this.#id_City=id_City }

    get name(){ return this.#name }
    get description(){ return this.#description }
    get type(){ return this.#type }
    get key(){ return this.#key }
    get id_User(){ return this.#id_User }
    get id_City(){ return this.#id_City }

    async Create(){

        const insert = await pool.query('INSERT INTO profile_account (name, description, type, key_rol, id_user, id_city) VALUES (?,?,?,?,?,?)',[this.#name, this.#description,this.#type,this.#key,this.#id_User,this.#id_City])        
        return insert[0];

    }

}

export default ProfileAcocunt;