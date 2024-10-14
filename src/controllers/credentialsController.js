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
        // let {Email,Password}= req.body;
        let Email=req.body.Email;
        let Password=req.body.Password;
        Password= await hashPassword(Password);
        const newCredential= new Credentials({Email,Password});
        await newCredential.save();
        return  res.status(201).json({Email:newCredential.email});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
};


async function verifyPassword(plainPassword, hashedPassword) {
    try {
        if (await argon2.verify(hashedPassword, plainPassword)) {
            console.log("Password is correct");
            return true;
        } else {
            console.log("Password is incorrect");
            return false;
        }
    } catch (err) {
        console.error(err);
        return false;
    }
}


const Login = async (req,res)=>{
    
    try{
        // let {Email,Password}=req.body;
        console.log("here in login");
        let Email=req.body.Email;
        let Password=req.body.Password;
        console.log(Password);
        let userFromDb=await Credentials.findOne({Email:Email});
        if(!userFromDb){
            return res.status(400).json({message:"no user found"});
        }
        // console.log(userFromDb.)
        let check=await verifyPassword(Password,userFromDb.Password);
        console.log(check);
        if(!check){
            return res.status(400).json({message:"wrong password"});
        }
        let userProfileFromDb= await UserProfile.findOne({Email:Email});
        let role=userProfileFromDb.Role;
        let payLoad={Email,role};
        const accessToken = jwt.sign(payLoad,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'60m'});
        return res.status(200).json({accessToken:accessToken})
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
};

module.exports = {CreateCredentials,Login}