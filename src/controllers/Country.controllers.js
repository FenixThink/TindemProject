import Country from "../models/Country.model.js";

class CountryController{

    static createContry(){
        return async(req,res) => {
            try{
                const contry= new Country(req.body);
                contry.create()
                return res.status(201).json({mesage:"contry created Successfully"})
            }catch(error){
                return res.status(500).json({message:error.message})
            }
        }
    }
}

export default CountryController;