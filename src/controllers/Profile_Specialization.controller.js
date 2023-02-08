import  Profile_Specialization  from "../models/Profile_Specialization.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class ProfileSpecializationController extends GeneralQuerySql{

    static CreateSpec = async (req, res) => {
        try {
                const prSpecialization = new Profile_Specialization(req.body);
                const query = await prSpecialization.create();
                res.status(200).json({message: 'Profile Specialization successfully created'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: error.message
            });
        }
    }; 

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Profile_Specialization.All()
            res.send(respuesta)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

    static getFindOne =async(req,res)=>{
        try{
            const [respuestaId] = await Profile_Specialization.FindOne(req.params.id)
            res.send(respuestaId)
            if (respuestaId.length <= 0) return res.status(404).json({
                message: 'Profile Specialization does not exist!'
            });

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }
    
    
}

export default ProfileSpecializationController;
