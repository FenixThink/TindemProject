import ProfileAccount from "../models/ProfileAccount.model.js"

class ProfileAccountController{

    static create = async (req,res) =>{
        try {
            const profileAccount = new ProfileAccount(req.body)
            const rows = await profileAccount.Create()

            res.status(200).json({
                message: "Profile has been created successfully"
            })
            
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
        
    }

    static getAll =async(req,res)=>{
        try{
            const rows = await ProfileAccount.All()

            if(!rows.length){
                return res.status(404).json({
                    message: "Profiles not found"
                }); 
            }

            res.send(rows)

        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }
    }

    static findOne = async(req, res) => {
        try {
           const rows = await ProfileAccount.FindOne(req.params.id); 

            if(!rows.length){  
                return res.status(404).json({
                    message: "Profile not found"
                });            
            }
            
            res.send(rows);

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        };
    }
}

export default ProfileAccountController;