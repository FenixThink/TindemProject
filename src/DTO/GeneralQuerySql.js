import { pool } from "../../db/db.js";
class GeneralQuerySql{

    static async All(){
        const query = await pool.query(`SELECT * FROM ${this.table}`)
        return query[0]
    }

}

export default GeneralQuerySql