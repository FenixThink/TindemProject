import { Router } from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import User from '../models/User.model.js';

const router = Router();


router.post('/',async (req,res)=>{

    const query = await User.All()
    query.forEach(e=>{
        if(e.email == req.body.email && e.userPassword == req.body.userPassword){
            console.log('Done')
        }
    })

});

export default router;