import  Profile_specialization  from "../models/Profile_specialization.model.js";

class ProfileSpecializationController{

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
}

export default ProfileSpecializationController;
