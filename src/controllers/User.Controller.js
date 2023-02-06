import User from '../models/User.model.js'

class UserController{
    createUser(){
        return async(req,response)=>{
        try{


        const dataUser= new User(req.body);
            const res = await dataUser.createUser()
            return response.send(res)
        }catch(error){
            return response.send({
                "status":404,
                "message":error.message
            })
        }

    }
    }
}

export default UserController;