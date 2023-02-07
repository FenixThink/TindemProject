import Company from "../models/Company.model.js";

class CompanyController {

    static create(){
        return  async (req,res)=>{
            try {
                const company = new Company(req.body)
                const data = await company.create()
                res.status(200).json({message: 'Company successfully created'})
            } catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

}


export default CompanyController