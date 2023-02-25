import {pool} from "../../db/db.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
class Applicant extends GeneralQuerySql{

    static table = 'applicant';
  
    #lastname;
    #day_of_birth;
    
    constructor(body){
        super();
        this.#lastname = body.lastname
        this.#day_of_birth = body.day_of_birth;
    }
    
    
    set lastname(lastname){this.#lastname =lastname}
    set day_of_birth(day_of_birth){ this.#day_of_birth = day_of_birth }

    
    
    get lastname(){return this.#lastname}
    get day_of_birth(){ return this.#day_of_birth }
    
    async create(){
        const rows = await pool.query(`INSERT INTO applicant(lastname,day_of_birth) VALUES (?,?)`,[this.#lastname,this.#day_of_birth])
        return rows[0];
    }

    static async update(lastname, day_of_birth, id){
        const query = "UPDATE applicant SET lastname = ?, day_of_birth = ? WHERE id = ?";
        const values = [lastname, day_of_birth, id];
        const result = await pool.query(query, values);
        return result.affectedRows;
    }
    
    static async FindOne(id){

        const applicant = await pool.query('SELECT DISTINCT pa.key_rol AS id, pa.name, ap.lastname AS lastname ,pa.img, pa.description, c.name AS city,p.name AS Country, date_format(ap.day_of_birth, "%d-%m-%Y") AS day_of_founded, pa.type FROM profile_account pa INNER JOIN applicant ap ON pa.key_rol= ap.id INNER JOIN city c ON pa.id_city = c.id INNER JOIN country p ON c.id_country = p.id INNER JOIN user_account ua ON pa.id_user = ua.id WHERE pa.type="applicant" AND pa.key_rol = (?) ',[id])
        return applicant[0]

    }

}

export default Applicant;