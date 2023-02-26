import Interest_area from "../models/Interest_area.model.js";
import GeneralQuerySql from "../DTO/GeneralQuerySql.js"

class InterestAreaController extends GeneralQuerySql {

    static async createInterestArea(req,res){
            try {
                
                   const area = new Interest_area(req.body);
                   let result = await area.create();
                    result.affectedRows = 0

                   res.status(201).json({message:"Area Created Successfully"})

               } catch (error) {
                   return res.status(500).json({message:error.message});
               }
       
    }

    static async getInterestAplicant(req,res){
            try {

                const interest = await Interest_area.interest(req.params);
                const profile = await Interest_area.indexInteresAplicant(req.params);
                const element =  await Interest_area.InteresArea(req.params);

                // console.log (interest)
                console.log(profile)
                // console.log(element)

                if(profile.length == 0 || interest.length == 0){
                    return res.status(500).json({message:"Profile not found"})   
                };
                return res.status(200).json([profile[0], element]); 

            } catch (error) {
                console.log(error)
                return res.status(500).json({message:error.message});
            }
        
    }

    static async getInterestCompany(req,res){
            try {

                const interest = await Interest_area.interest(req.params);
                const profile = await Interest_area.indexInteresCompany(req.params);
                const element =  await Interest_area.InteresArea(req.params);
                if(profile.length == 0 || interest.length == 0){
                    return res.status(500).json({message:"Profile not found"})   
                };
                return res.status(200).json([profile[0], element]); 

            } catch (error) {
                console.log(error)
                return res.status(500).json({message:error.message});
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