import  Profile_specialization  from "../models/Profile_Specialization.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class ProfileSpecializationController extends GeneralQuerySql{

    static CreateSpec = async (req, res) => {
        try {
                const prSpecialization = new Profile_specialization(req.body);
                const query = await prSpecialization.create();
                res.status(200).json({message: query})
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: error.message
            });
        }
    }; 

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Profile_specialization.All()
            if (respuesta.length <= 0) return res.status(404).json({
                message: 'Profiles Specializations does not exist!'
            });
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
            
            const respuestaId = await Profile_specialization.FindOne(req.params.id)
            if (respuestaId.length <= 0) return res.status(404).json({
                message: 'Profile Specialization does not exist!'
            });
            res.send(respuestaId)
           

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

    
    
    
}

export default ProfileSpecializationController;
