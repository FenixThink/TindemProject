import SpecificInterest from '../models/SpecificInterest.model.js'

class SpecificInterestController{
    static createSpecificInterest = async (req, res) => {
        try {
            const specificInterest = new SpecificInterest(req.body);
            const data = await specificInterest.create();
            res.status(200).json({message: 'Specific interest successfully created'})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    };

    static getAll =async(req,res)=>{
        try{
            const respuesta = await SpecificInterest.All()
            res.send(respuesta)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }
}

export default SpecificInterestController;