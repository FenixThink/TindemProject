class CityModels{

    constructor(body) {
        this.#name = body.name,
        this.#id_Country = body.id_Country
    }

    set name(name){ this.#name = name }
    set id_Country(id_Country){ this.#id_Country = id_Country }

    get name(){ return this.#name }
    get id_Country(){ return this.#id_Country}

}

export default CityModels;