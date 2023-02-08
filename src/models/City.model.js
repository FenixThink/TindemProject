import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";


class City extends GeneralQuerySql{
  #name;
  #id_Country;

    static table = 'city'

    constructor(body) {
        this.#name = body.name,
        this.#id_Country = body.id_Country
    }

    set name(name){ this.#name = name }
    set id_Country(id_Country){ this.#id_Country = id_Country }

    get name(){ return this.#name }
    get id_Country(){ return this.#id_Country}


  async  Create(){
    const rows = await pool.query(`INSERT INTO city(name,id_Country) VALUES (?,?)`,[this.#name,this.#id_Country])
    return rows
  }
  
  
}

export default City;