import Interest_area from "../models/Interest_area.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class InterestAreaController extends GeneralQuerySql {

    static  createInterestArea(){
        return async(req,res) => {
            try {
                   const area = new Interest_area(req.body);
                   const result = await area.create();
                   return res.status(201).json({message:"Area Created Successfully"});
               } catch (error) {
                   return res.status(500).json({message:error.message});
               }
       }
    }

    static getInterestAplicant(){
        return async(req,res) => {
            try {
                const log = await Interest_area.indexInteresAplicant(req.params);
                const {profile, interest} = log
                return res.status(200).json([profile[0][0], interest[0]]);

            } catch (error) {
                return res.status(500).json({message:error.message});
            }
        }
    }
}

export default InterestAreaController;