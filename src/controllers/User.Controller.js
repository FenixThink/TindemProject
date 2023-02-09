import User from '../models/User.model.js'


class UserController{

    static createUser=async(req,response)=>{
        // const dataUser = new User(req.body);
        // const res = await dataUser.createUser()
        // return response.json({'message': res})
        // console.log(res)
        
        try{

        const dataUser= new User(req.body);
            const res = await dataUser.create()
            if(res.affectedRows>0){
                return response.status(202).json({'message': 'se guardo correctamente'})

            }

            // return response.status(202).json({'message': res})
        }catch(error){
            return response.send({
                "status":404,
                "message":error.message
                
            })
        }
    }

    static getAll =async(req,res)=>{
        try{
            
            const respuesta = await User.All()
            if(respuesta.length=== 0){
                return res.status(404).json({'message':'users not found'})
            }
            // console.log(respuesta)
            res.send(respuesta)
            

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

    static getfindOne =async(req,res)=>{
        try{
            
            const  answer= await User.FindOne(req.params.id)
            if(answer.length=== 0){
                return res.status(404).json({'message':'user not found'})
            }
            // console.log(respuesta)
            res.send(answer)
            
            

        }catch(error){
            return res.send({
                "status":404,
                "message":error.message
            })

        }
    }

}

export default UserController;