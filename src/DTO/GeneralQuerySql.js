import { pool } from "../../db/db.js";
class GeneralQuerySql{

    static async All(){
        const queryAll = await pool.query(`SELECT * FROM ${this.table}`)
        return queryAll[0]
        
    } 

    static async FindOne(id){
        const queryId = await pool.query(`SELECT *  FROM ${this.table} WHERE id = (?)`, [id])
        return queryId[0]
    }

}

export default GeneralQuerySql