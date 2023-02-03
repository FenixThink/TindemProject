class CountryModel{
    
    constructor(name){
        this.#name = name;
    }

    set name(name){ this.#name = name; }

    get name(){ return this.#name; }
}

export default CountryModel;