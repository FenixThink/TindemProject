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

    static async lastRegisterId(){
        const [key] = await pool.query(`SELECT id FROM ${this.table} ORDER BY ${this.table}.id DESC LIMIT 1`);
        return key[0].id;
    }

}

export default GeneralQuerySql