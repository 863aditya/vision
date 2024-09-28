const jwt = require('jsonwebtoken')

function authenticateToken(req,res,next){
    console.log("here in middleware");
    const authHeader=req.headers['authorization'];
    const token= authHeader && authHeader.split(' ')[1];
    console.log(token);
    if(token == null){
        res.status(401);
        return;
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,payloadJwt)=>{
        if(err)return res.status(403).json({message:err.message});
        req.payloadJwt=payloadJwt;
        next();
    })
}

module.exports = {authenticateToken}