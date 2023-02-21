import Profile_account from "../models/Profile_account.model.js"
import User from "../models/User.model.js";
import Applicant from "../models/Applicant.model.js";

class ProfileAccountController{

    static create = async (req,res) =>{
        try {
            const user = new User(req.body)
            const applicant = new Applicant(req.body)
            const profile = new Profile_account(req.body)
            await user.create();
            await applicant.create();
            await profile.idCity(req.body.city)
            await profile.lastUser(req.body.email)
            await profile.lastApplicant();
            await profile.create()
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
            const rows = await Profile_account.All()

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
           const rows = await Profile_account.FindOne(req.params.id); 
            console.log(rows)
            if(!rows.length){  
                return res.status(404).json({
                    message: "Profile not found"
                });            
            }
            
            res.status(200).json({
                "result":rows[0]
            });

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        };
    }

    static update = async (req, response) => {
        try {
            const{name,description,id_city} = req.body;
            const res = await Profile_account.update(name,description,id_city, req.params.id);
            return response.send({
                "status" : 200,
                "message":"Profile account update succefully"
            })
        } catch (error) {
            return res.send({
                "status" : 404,
                "message" : error.message
            })
        }
    }
}

export default ProfileAccountController;