import Country from "../models/Country.model.js";

class CountryController{

    static createContry(){
        return async(req,res) => {
            try{
                const contry= new Country(req.body);
                const respuesta= await contry.create()
                return res.json({
                    "messgae":respuesta
                })
            }catch(error){
                console.log(error)
                return res.status(500).json({message:error.message})
            }
        }
    }
}

export default CountryController;