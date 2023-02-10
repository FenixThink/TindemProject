import jwt from "jsonwebtoken";
class Middelwares {
    Authmidelware = (req,res,next)=>{
        const accessToken =  req.headers['autorization'] || req.query.accessToken;
        if (!accessToken) res.send('Access Denied');
        jwt.verify(accessToken,process.env.SECRET,(err,user)=>{
            if (err){
                res.send('access denied, token expired or incorrect')
            }else{
                req.user = user;
                next();
            }
        })
    };
}
export default Middelwares
