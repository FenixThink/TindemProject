import Profile_account from "../models/Profile_account.model.js"

class ProfileAccountController{

    static create = async (req,res) =>{
        try {
            const profileAccount = new Profile_account(req.body)
            const data = await profileAccount.create()
            res.status(200).json({message: 'Profile successfully created'})
            
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
        
    }
}

export default ProfileAccountController;