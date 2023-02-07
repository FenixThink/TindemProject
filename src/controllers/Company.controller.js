import Company from "../models/Company.model.js";

class CompanyController {
    
    static companyRegister = (req,res) =>{
        res.render('../views/registerViews/registerBusiness/index.html')
    };

    static Create(){
        return  (req,res)=>{
            const company = new Company(req.body)
            try {
                company.Create()
            } catch (error) {
                res.status(500).json({
                    Message : error.Messages 
                })
            }
        }
    }


}


export default CompanyController