import User from '../models//User.model.js'
import Company from "../models/Company.model.js";
import City from '../models/City.model.js';
//Inserción de datos al modelo de "ProfileAccount"
import Profile_account from "../models/Profile_account.model.js";

import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class CompanyController extends GeneralQuerySql {

    //NO OLVIDAR asignar el async en el metodo al solucionar... GRACIAS!!.
    static async Create(req, res) {
        try {
        
            const { name, nitOrLastname, email, date, password, description, city } = req.body;
            console.log(password)
            const companyInfo = {
                name: name,
                NIT: nitOrLastname,
                email: email,
                password: password,
                day_of_founded: date,
                description: description,
                type: "company",
                img: req.file.filename,
            }

            const user = new User(companyInfo)
            await user.create() 
            companyInfo.id_user = await user.lastUser(user.email)

            companyInfo.id_city = await City.idCity(city) 

            const company = new Company(companyInfo)
            await company.create()
            companyInfo.key = await Company.lastRegisterId()

           const profile = new Profile_account(companyInfo)
           await profile.create()

            res.redirect('/')

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error.message
            });
        }
    }

    static getAll = async (req, res) => {
        try {
            const respuesta = await Company.All()
            return res.send(respuesta)
        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })
        }
    }
    static companyUpdate = async (req, response) => {
        try {
            const { nit, day_of_founded } = req.body;
            const res = await Company.update(nit, day_of_founded, req.params.id);
            return response.send({
                "status": 200,
                "message": "Company update succefully"
            })
        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })
        }
    }
}
export default CompanyController