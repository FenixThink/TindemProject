import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class User extends GeneralQuerySql{
   
    static table = 'UserAccount'
    #email;
    #password;

    constructor(body){
        this.#email = body.email;
        this.#password = body.password;
    }

    set Email(email){ this.#email = email }
    set Password(password){ this.#password =  password }

    get Email(){ return this.#email }
    get Password(){ return this.#password }

    createUser (){

        const insert = pool.query('INSERT INTO UserAccount(email,password) VALUES(?,?)',[this.#email,this.#password])
        return insert[0]
             

    }

}

export default User;