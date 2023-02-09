import User from '../models/User.model.js'


class UserController{
    createUser(){
        return async(req,response)=>{
        try{


        const dataUser= new User(req.body);
            const res = await dataUser.create()
            return response.status(202).json({'message':'el usuario ha sido creado'})
        }catch(error){
            return response.send({
                "status":404,
                "message":error.message
            })
        }

    }
    }

    getAll(){
        return async(req,res)=>{
            try{
                const respuesta = await User.All()
                res.send(respuesta)

            }catch(error){
                return res.send({
                    "status":404,
                    "message":error.message
                })

            }
        }
    }

}

export default UserController;