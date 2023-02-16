import { pool } from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class City extends GeneralQuerySql{
  
    static table = 'city';
    #name;
    #id_country;

    constructor(body) {
        super()
        this.#name = body.name,
        this.#id_country = body.id_country
    }

    set name(name){ this.#name = name }
    set id_country(id_country){ this.#id_country = id_country }

    get name(){ return this.#name }
    get id_country(){ return this.#id_country}


  async create(){
    const rows = await pool.query(`INSERT INTO city(name,id_Country) VALUES (?,?)`,[this.#name,this.#id_country])
    return rows[0]
  }
}

export default City;