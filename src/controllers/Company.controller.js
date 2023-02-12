import Company from "../models/Company.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class CompanyController extends GeneralQuerySql {
    
    static companyRegister = (req,res) =>{
        res.render('../views/registerViews/registerBusiness/index.html')
    };

    static async Create(req,res){
            try {
                // const company = new Company(req.body)
                // const data = await company.create()
                console.log(req.body)
                res.status(200).json({message: 'Company successfully created'})
            } catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
    }

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Company.All()
            res.send(respuesta)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }



}


export default CompanyController