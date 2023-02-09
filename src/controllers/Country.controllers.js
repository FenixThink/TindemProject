import { request } from "express";
import Country from "../models/Country.model.js";

class CountryController{

    static createContry(){
        return async(req,res) => {
            try{
                const contry= new Country(req.body);
                const respuesta= await contry.create()
                if(respuesta.affectedRows>0){
                    res.status(202).json({
                        message:"se creo correctamente"
                    })
                }
            }catch(error){
                console.log(error)
                return res.status(500).json({message:error.message})
            }
        }
    }

    static CountryId=async(req, response) => {
        try {
           const res = await Country.FindOne(req.params.id); 
           response.send(res);
        } catch (error) {
            response.send({
                "status" : 404,
                "message" : error.message
            });
        }   
     }

     static getAll =async(req,res)=>{
        try{
            const respuesta = await Country.All()
            res.send(respuesta)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

}

export default CountryController;