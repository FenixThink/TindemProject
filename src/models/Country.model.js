class CountryModel{
    //el mejor modelo
    constructor(body){
        this.#name = body.name;
    }

    set Name(name){ this.#name = name; }

    get Name(){ return this.#name; }
    
}

export default CountryModel;