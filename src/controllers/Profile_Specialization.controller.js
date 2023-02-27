import Profile_specialization from "../models/Profile_Specialization.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"
import Specific_interest from "../models/Specific_interest.model.js";
import Profile_account from "../models/Profile_account.model.js";

class ProfileSpecializationController extends GeneralQuerySql {

    static CreateSpec = async (req, res) => {
        try {

            
            const {specialization} = req.body;
            setTimeout(async ()=>{
                const lastUserId = await Profile_account.lastRegisterId()
                specialization.forEach(async (e)=>{
                    const id = await Specific_interest.findId(e)
                    const body={
                        id_profile_account:lastUserId,
                        id_specialization:id
                    }
                        const profileSpecialization = new Profile_specialization(body)
                        profileSpecialization.create()
                })

            },1000)

            res.redirect('/home')

        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    };

    static getAll = async (req, res) => {
        try {
            const respuesta = await Profile_specialization.All()
            if (respuesta.length <= 0) return res.status(404).json({
                message: 'Profiles Specializations does not exist!'
            });
            res.send(respuesta)

        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })

        }
    }



    static getFindOne = async (req, res) => {
        try {

            const respuestaId = await Profile_specialization.FindOne(req.params.id)
            if (respuestaId.length <= 0) return res.status(404).json({
                message: 'Profile Specialization does not exist!'
            });
            res.send(respuestaId)


        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })

        }
    }




}

export default ProfileSpecializationController;
