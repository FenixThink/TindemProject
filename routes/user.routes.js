import { Router } from 'express';
import UserController from '../src/controllers/User.Controller.js';
import User from '../src/models/User.model.js';
import userController from "../src/controllers/User.Controller.js";
import Middelwares from '../src/Middlewares/Auth.Middleware.js';
const middelwares = new Middelwares()

const router = Router();

router.post('/createUser',UserController.createUser)

router.get('/allUser',UserController.getAll)

router.get('/getfindOne/:id',UserController.getfindOne)

router.post('/api/login',UserController.auth)


router.post('/api/decode',UserController.validateToken)

router.get('/api/data',middelwares.Authmidelware,(req,res)=>{
    res.json({
        rol:req.user.rol,
        tuits:[
            {
                id:0,
                text:'Este es mi primer tuit',
                username:'yisus'
            },
            {
                id:1,
                text:'Este es mi segundo tuit',
                username:'johan'
            },
            {
                id:2,
                text:'Este es mi tercer tuit',
                username:'sebas'
            }
        ]
    })
    return;
})
export default router;

router.post('/',async (req,res)=>{
    console.log(req.body)

//     const query = await User.All()
//     query.forEach(e=>{
//         if(e.email == req.body.email && e.userPassword == req.body.userPassword){
//             console.log('Done')

//         }
//     })

});