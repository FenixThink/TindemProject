import { response } from "express";
import  Applicant from "../models/Applicant.model.js"
import User from '../models/Applicant.model.js'


class ApplicantController{
    static applicantCreate = async(req,response)=>{
        try {

            console.log(req.body)
            /* const user = new User(req.body)
            const applicant = new Applicant(req.body)
           const res = await applicant.create();  */
           response.send(res.affectedRows);
        } catch (error) {
            response.send({
                "status" : 404,
                "message" : error.message
            });
        };
    };

    static applicantId = async(req, response) => {
        try {
           const res = await Applicant.FindOne(req.params.id); 
           if (res <= 0) {
            response.send("No record found with this id");
        } else {
            response.send(res);
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