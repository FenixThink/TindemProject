import SpecificInterest from '../models/Specific_interest.model.js'

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
            
            if(respuesta.length == 0){
            return res.status(404).json({message: "Specific interests not found"})
            }
            res.send(respuesta)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

    static getOne = async(req, res) => {
        try {
           const respuesta = await SpecificInterest.FindOne(req.params.id); 
           
           if(respuesta.length == 0){
            return res.status(404).json({message: "Specific interests not found"})
            }

            res.send(respuesta);
        } catch (error) {
            res.send({
                "status" : 404,
                "message" : error.message
            });
        };
    }



    static async findUserSpecializations (req,res){
        try{
            const answer = await SpecificInterest.findUserSpecializations(req.params)
            const {specific_interest,findUserSpe} = answer
            // res.send(answer)
            return res.status(200).json([specific_interest[0],findUserSpe[0]]);
            
        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })
        }
    }
    static async findinteresArea (req,res){
        try{
            const answer = await SpecificInterest.findinteresArea(req.params)
            
            // res.send(answer)
            return res.status(200).json(answer[0]);
            
        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })
        }
    }

}

export default SpecificInterestController;