const Credentials=require('../models/Credentials')
const UserProfile = require('../models/UserProfile')
const PayloadJwt = require('../models/PayloadJwt')
const jwt=require('jsonwebtoken')
const argon2=require('argon2')


async function hashPassword(password){
    try{
        const hash=await argon2.hash(password);
        return hash;
    }
    catch(err){
        console.log(err.message);
        throw err;
    }
}


const CreateCredentials = async (req,res) =>{
    try{
        let {email,password}= req.body;
        password= await hashPassword(password);
        const newCredential= new Credentials(email,password);
        await newCredential.save();
        return  res.status(201).json({email:newCredential.email});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};


async function verifyPassword(plainPassword, hashedPassword) {
    try {
        if (await argon2.verify(hashedPassword, plainPassword)) {
            // console.log("Password is correct");
            return true;
        } else {
            // console.log("Password is incorrect");
            return false;
        }
    } catch (err) {
        console.error(err);
    }
}


const Login = async (req,res)=>{
    
    try{
        let {email,password}=req.body;
        let userFromDb=await Credentials.findOne({email:email});
        if(!userFromDb){
            return res.status(400).json({message:"no user found"});
        }
        let check=verifyPassword(password,userFromDb.password);
        if(!check){
            return res.status(400).json({message:"wrong password"});
        }
        let userProfileFromDb= await UserProfile.findOne({email:email})
        let payLoad=new PayloadJwt(email,userProfileFromDb.Role);
        const accessToken = jwt.sign(payLoad,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'10s'});
        return res.status(200).json({accessToken:accessToken})
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
};

module.exports = {CreateCredentials,Login}