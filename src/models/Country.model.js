class Country{
    
    static table = 'Country'
    
    constructor(body){
        this.#name = body.name;
    }

    set Name(name){ this.#name = name; }

    get Name(){ return this.#name; }
    
}

export default Country;