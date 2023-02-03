class CountryModel{
    constructor(body){
        this.#name = body.name;
    }

    set name(name){ this.#name = name; }

    get name(){ return this.#name; }
}

export default CountryModel;