class Company{

    static table = 'Company'

    constructor(body){
        this.#NIT = body.NIT,
        this.#dayOfFounded = body.dayOfFounded
        this.#id_Profile = body.id_Profile
    }

    set NIT(NIT){ this.#NIT = NIT }
    set dayOfFounded(dayOfFounded){ this.#dayOfFounded = dayOfFounded }
    set id_Profile(id_Profile){ this.#id_Profile = id_Profile }

    get NIT(){ return this.#NIT }
    get dayOfFounded(){ return this.#dayOfFounded }
    get id_Profile(){ return this.#id_Profile }
}

export default Company
