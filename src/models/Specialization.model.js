import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
class Specialization extends GeneralQuerySql{

    static table = 'Specialization'

    constructor(body){
        this.#name = body.name
        this.#id_Area = body.id_Area
    }

    set Name(name){ this.#name = name }
    set Id_Area(id_Area){ this.#id_Area = id_Area }

    get Name(){ return this.#name }
    get Id_Area(){ return this.#id_Area }

}

export default Specialization