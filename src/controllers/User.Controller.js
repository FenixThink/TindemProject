import User from '../models/User.model.js'
import jwt from "jsonwebtoken";

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
                return {'message':'users not found'}
            }
            // console.log(respuesta)
            return (respuesta);
        }catch(error){
            return {
                "status":404,
                "message":error.message
            }

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

    static generateAccessToken(user){
        return jwt.sign(user,process.env.SECRET,{expiresIn: '5m'})
    }
    static auth = async (req,res)=>{

    const {email,password} = req.body;
    const user = new User(email,password);
    const query = await this.getAll();
    let status = false
     query.forEach((e)=>{
        if (e.email === email && e.password === password){
            status = true
        }
    })
    if (status){
        const [query2] = await user.searchType(email);
        const User = {email:email,rol:query2.type};
        const accessToken = this.generateAccessToken(User);

        res.header('autorization',accessToken).json({
            message: 'user atutenticado',
            token:accessToken

        });
        return;
    }
    res.send('No se ha podido loguear');
    }

}

export default UserController;