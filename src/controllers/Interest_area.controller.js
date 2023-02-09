import Interest_area from "../models/Interest_area.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class InterestAreaController extends GeneralQuerySql {

    static  createInterestArea(){
        return async(req,res) => {
            try {
                
                   const area = new Interest_area(req.body);
                   let result = await area.create();
                    result.affectedRows = 0
                   console.log(result.affectedRows);

                   (result.affectedRows == 1) ?  res.status(201).json({message:"Area Created Successfully"}) : res.status(500).json({message:"Error creating interest area"})
                   
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


    static InteresgetAll =async(req,res)=>{
        try{
            const answer = await Interest_area.All()
            if(answer.length === 0){
                return res.status(404).json({message:"Areas Not Found"})
            }
            res.send(answer)

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

    static FindOne = async(req,res)=>{
        try {
            const answer = await Interest_area.FindOne(req.params.id)
            if(answer.length === 0){
                return res.status(404).json({message:"Area Not Found"});
            }
            res.send(answer)
        } catch (error) {
            return res.send({
                "status":404,
                "message":error.message
            })
        }
    }


}

export default InterestAreaController;