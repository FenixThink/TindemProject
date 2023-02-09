import GeneralQuerySql from "../DTO/GeneralQuerySql.js";
class Country extends GeneralQuerySql{
    
    static table = 'country'
    
    constructor(body){
        super();
        this.#name = body.name;
    }

    set name(name){ this.#name = name; }

    get name(){ return this.#name; }
    
}

export default Country;