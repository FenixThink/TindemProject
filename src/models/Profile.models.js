class Profile{
    
    constructor(body){
        this.#name = body.name;
        this.#description = body.description;
        this.#interests = body.interests;
        this.#iLikelt = body.iLikelt;
        this.#id_Country = body.id_Country;
        this.#id_City = body.id_City;
        this.#id_User = body.id_User;
    }

    set Name(name){this.#name=name}
    set Description(description){this.#description=description}
    set Interests(interests){this.#interests=interests}
    set ILikelt(iLikelt){this.#iLikelt=iLikelt}
    set Id_Country(id_Country){this.#id_Country=id_Country}
    set Id_City(id_City){this.#id_City=id_City}
    set Id_User(id_User){this.#id_User=id_User}




    get Name(){return this.#name}
    get Description(){return this.#description}
    get Interests(){return this.#interests}
    get ILikelt(){return this.#iLikelt}
    get Id_Country(){return this.#id_Country}
    get Id_City(){return this.#id_City}
    get Id_User(){return this.#id_User}



}

export default Profile;