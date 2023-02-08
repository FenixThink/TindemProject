import { Router } from 'express';
import UserController from '../controllers/User.Controller.js';
import User from '../models/User.model.js';

const usercontroller = new UserController()

const router = Router();


// router.post('/',async (req,res)=>{

//     const query = await User.All()
//     query.forEach(e=>{
//         if(e.email == req.body.email && e.userPassword == req.body.userPassword){
//             console.log('Done')

//         }
//     })

// });

router.post('/createUser',usercontroller.createUser())



router.get('/allUser',usercontroller.getAll())

export default router;