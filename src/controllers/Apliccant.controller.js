import { response } from "express";
import  Applicant from "../models/Applicant.model.js"


class ApplicantController{
    static applicantCreate = async(req,response)=>{
        try {
            const applicant = new Applicant(req.body)
            const res = await applicant.createApplicant(); 
            if (res <=  0) {
                response.send("No hay ni un registro")
            } else {
                response.send(res)
            }
        } catch (error) {
            response.send({
                "status" : 404,
                "message" : "Error ala hora de ejecutar esta req"
            });
        };
    };

    static applicantId = async(req, response) => {
            try {
               const res = await Applicant.FindOne(req.params.id); 
            //    response.send(res);
            if (res <= 0) {
                response.send("No se encontro ni un registro por ese id")
            } else {
                response.send(res)
            }
            } catch (error) {
                response.send({
                    "status" : 404,
                    "message" : "Error a la hora de ejecutar esta req de busqueda de id"
                });
            };
    }

    static getAll =async(req,res)=>{
        try{
            const respuesta = await Applicant.All()
            res.send(respuesta)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }


}

export default ApplicantController;