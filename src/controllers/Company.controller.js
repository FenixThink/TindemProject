import Company from "../models/Company.model.js";
//Inserción de datos al modelo de "ProfileAccount"
import Profile_account from "../models/Profile_account.model.js";

import GeneralQuerySql from "../DTO/GeneralQuerySql.js";

class CompanyController extends GeneralQuerySql {

    //NO OLVIDAR asignar el async en el metodo al solucionar... GRACIAS!!.
    static Create(req, res) {
        try {
            /*  const company = new Company(req.body) 
                const data = await company.create() */
            /* multer.single('image') */
            const { companyName, companyUsername, description, type, key } = req.body;

            let bodyInfo = req.body;
            console.log("Body Info: ", bodyInfo);

            let infoImage = req.file;
            console.log("Info: ", infoImage);

            const newCompanyInfo = {
                name: companyName,
                userName: companyUsername,
                description: description,
                type: type,
                key: key,
                img: req.file.filename,
            }
            console.log("NewCompanyInfo", newCompanyInfo);

            //La instanciación que hice está "capot' :c"
            //const profileAccount = new Profile_account(newCompanyInfo);
            //console.log("ProfileAccount: ", profileAccount);
            //Await pa hacer el .save() en la bd.
            //await profileAccount.save();

            res.status(202).json({
                message: 'NiceOne',
                profileAccount
            });
        } catch (error) {
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

}
export default CompanyController