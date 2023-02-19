import jwt from "jsonwebtoken";

/*Dependencias para gestionar la base de datos con mongo*/
import multer from "multer";

class Middelwares {
    Authmidelware = (req,res,next)=>{
        const accessToken =  req.headers['autorization'] || req.query.accessToken;
        if (!accessToken) res.status(401).json({message:'Access Denied'});
        jwt.verify(accessToken,process.env.SECRET,(err,user)=>{
            if (err){
                res.status(401).json({message:'access denied, token expired or incorrect'})
            }else{
                req.user = user;
                next();
            }
        })
    };
}
export default Middelwares
