import { Profile_Specialization } from "../models/Profile_Specialization.model.js";

class ProfileSpecializationController{

    static CreateSpec = async (req, res) => {
        
        try {
                const prSpecialization = new Profile_Specialization(req.body);
                prSpecialization.Create();
                res.status(200).json({message: 'Profile Specialization successfully created'})
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    };   
}

export default ProfileSpecializationController;
