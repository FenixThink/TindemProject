class Match {

    static table = 'ServiceMatch'

    constructor(body) {
        this.#id_Applicant = body.id_Applicant,
            this.#id_Company = body.id_Company
    }

    set Id_Applicant(id_applicant) { this.#id_Applicant = id_applicant }
    set Id_Company(id_company) { this.#id_Company = id_company }

    get Id_Applicant() { return this.#id_Applicant }
    get Id_Company() { return this.#id_Company }
}

export default Match