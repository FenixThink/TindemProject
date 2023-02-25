import City from '../models/City.model.js';
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"
import { response } from 'express';



class CityController extends GeneralQuerySql {
    static createCity = (req, res) => {
        try {
            const city = new City(req.body);
            city.create();
            res.status(200).json({message: 'City successfully created'})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    };

    static getAll =async(req,res)=>{
        try{
            const respuesta = await City.All()
            return res.status(200).json({
                respuesta
            })


        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }
}
export default CityController;