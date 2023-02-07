import Company from "../models/Company.model.js";

class CompanyController {
    
    static companyRegister = (req,res) =>{
        res.render('../views/registerViews/registerBusiness/index.html')
    };

    static Create(){
        return  async (req,res)=>{
            const company = new Company(req.body)
            try {
               const data = await company.Create()
               res.status(200).json({message: 'Company successfully created'})
            } catch (error) {
                res.status(500).json({
                    Message : error.Messages 
                })
            }
        }
    }


}


export default CompanyController