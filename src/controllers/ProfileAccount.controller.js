import ProfileAccount from "../models/ProfileAccount.model.js"

class ProfileAccountController{

    static create = async (req,res) =>{
        try {
            const profileAccount = new ProfileAccount(req.body)
            const data = await profileAccount.Create()
            res.status(200).json({message: 'Profile successfully created'})
            
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
        
    }
}

export default ProfileAccountController;