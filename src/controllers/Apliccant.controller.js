import { response } from "express";
import  Applicant from "../models/Applicant.model.js"



class ApplicantController{
    static applicantCreate = async(req,response)=>{
        try {
            const applicant = new Applicant(req.body)
           const res = await applicant.createApplicant(); 
           response.send(res);
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
               response.send(res);
            } catch (error) {
                response.send({
                    "status" : 404,
                    "message" : error.message
                });
            };
    }
}

export default ApplicantController;