import { Router } from 'express';
import UserController from '../controllers/User.Controller.js';
import User from '../models/User.model.js';



const router = Router();


router.post('/createUser',UserController.createUser)



router.get('/allUser',UserController.getAll)

router.get('/getfindOne/:id',UserController.getfindOne)

export default router;

// router.post('/',async (req,res)=>{

//     const query = await User.All()
//     query.forEach(e=>{
//         if(e.email == req.body.email && e.userPassword == req.body.userPassword){
//             console.log('Done')

//         }
//     })

// });