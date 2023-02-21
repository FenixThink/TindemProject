import { pool } from "../../db/db.js"
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class Company extends GeneralQuerySql {

    static table = 'company';
    #NIT;
    #day_of_founded;

    constructor(body) {
        super();
        this.#NIT = body.NIT;
        this.#day_of_founded = body.day_of_founded;
    }

    set NIT(NIT) { this.#NIT = NIT }
    set day_of_founded(day_of_founded) { this.#day_of_founded = day_of_founded }

    get NIT() { return this.#NIT }
    get day_of_founded() { return this.#day_of_founded }

    async create() {

        const insert = await pool.query('INSERT INTO company(NIT,day_of_founded) VALUES (?,?)', [this.#NIT, this.#day_of_founded])
        return insert[0]

    }

    static async update(nit,day_of_founded,id){
        const query = "UPDATE company SET nit = ?, day_of_founded = ? WHERE id = ?";
        const values = [nit,day_of_founded,id];
        const result = await pool.query(query, values);
        return result.affectedRows;
      }

      static async FindOne(id){

        const company = await pool.query('SELECT DISTINCT pa.key_rol AS id, pa.name, co.nit AS nit ,pa.img, pa.description, c.name AS city,p.name AS Country, date_format(co.day_of_founded, "%d-%m-%Y") AS day_of_founded, pa.type FROM profile_account pa INNER JOIN company co ON pa.key_rol= co.id INNER JOIN city c ON pa.id_city = c.id INNER JOIN country p ON c.id_country = p.id INNER JOIN user_account ua ON pa.id_user = ua.id WHERE pa.type="company" AND pa.key_rol = (?) ',[id])
        return company[0]

    }
    
}

export default Company
