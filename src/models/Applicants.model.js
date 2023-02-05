class Applicant{
    
    constructor(body){
        this.#dayOfBirth = body.dayOfBirth;
        this.#id_Profile = body.id_Profile;
    }

    set DayOfBirth(dayOfBirth){ this.#dayOfBirth = dayOfBirth }
    set Id_Profile(id_Profile){ this.#id_Profile = id_Profile }

    get DayOfBirth(){ return this.#dayOfBirth }
    get Id_Profile(){ return this.#id_Profile }

}

export default ApplicantModel;