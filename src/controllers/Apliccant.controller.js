import { response } from "express";
import  Applicant from "../models/Applicant.model.js"

const applicant = new Applicant()

class ApplicantController{
    applicantCreate = async (req, res)=>{
        try {
           const res = await applicant.createApplicant(req,response); 
           response.send(res);
        } catch (error) {
            response.send({
                "status" : 404,
                "message" : error.message
            });
        };
    };
}

export default ApplicantController;