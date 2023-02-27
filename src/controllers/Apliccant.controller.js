import User from '../models/User.model.js'
import  Applicant from "../models/Applicant.model.js"
import City from "../models/City.model.js";
import Profile_account from "../models/Profile_account.model.js";


class ApplicantController{
    static applicantCreate = async(req,res)=>{
        try {
        
            const { name, nitOrLastname, email, date, password, description, city } = req.body;

            const applicantInfo = {
                name: name,
                lastname: nitOrLastname,
                email: email,
                password: date,
                day_of_birth: password,
                description: description,
                type: "applicant",
                img: req.file.filename
            }

            const user = new User(applicantInfo)
            await user.create() 
            applicantInfo.id_user = await user.lastUser(user.email)

            applicantInfo.id_city = await City.idCity(city) 

            const applicant = new Applicant(applicantInfo)
            await applicant.create()
            applicantInfo.key = await Applicant.lastRegisterId()

            const profile = new Profile_account(applicantInfo)
            await profile.create() 

            res.redirect('/')

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    static applicantId = async(req, response) => {
        try {
           const res = await Applicant.FindOne(req.params.id); 
           if (res <= 0) {
            response.send("No record found with this id");
        } else {
            response.send(res[0]);
        }
        } catch (error) {
            response.send({
                "status" : 404,
                "message" : error.message
            });
        };
    }

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Applicant.All()
            return respuesta
        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

    static applicantUpdate = async(req, response) => {
        try {
          const { lastname, day_of_birth } = req.body;
          const res = await Applicant.update(lastname, day_of_birth, req.params.id);
        return response.send({ "status": 200, "message": "Applicant updated successfully." });
        } catch (error) {
          return response.send({ "status": 404, "message": error.message });
        }
      } 
}

export default ApplicantController;