import Company from "../models/Company.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"
import multer from '../../public/libs/multer.js';


class CompanyController extends GeneralQuerySql {


    static async Create(req, res) {
        try {
            // const company = new Company(req.body)
            // const data = await company.create()
            console.log(req.body, req.file)
            multer.single('image')
            res.status(200).json({
                "message": "Success"
            })
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