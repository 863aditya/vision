const Profile = require('../models/Profile')
const argon2 = require('argon2')
const jwt=require('jsonwebtoken')
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

const CreateProfile = async (req,res) => {

    try{
        let { firstName, lastName,email,dob,phoneNumber,password}=req.body;
        password= await hashPassword(password);
        const newProfile= new Profile({firstName,lastName,email,dob,phoneNumber,password});
        await newProfile.save();
        res.status(201).json({firstName:newProfile.firstName,email:newProfile.email,message:"Profile Created successfully!"});
    }
    catch (err){
        res.status(400).json({message: err.message});
    }
};


const GetAllProfiles = async (req,res)=>{
    try{
        const profiles = await Profile.find();
        res.status(200).json(profiles);
        // res.status(201).json({message:"reached function successfully"});
    }
    catch(err){
        res.status(400).json({message: err.message});
        // throw err;
    }
};


const GetOneProfile = async (req,res) =>{
    try{
        const  { email } = req.params;
        const profile= await Profile.findOne({email:email});
        if(!profile){
            return res.status(404).json({message:"Profile not found"});
        }
        return res.status(201).json(profile);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};


const UpdateProfile = async (req,res)=>{
    try{

    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

const DeleteProfile = async (req,res) =>{
    try{

    }
    catch(err){

    }

};

function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token= authHeader && authHeader.split(' ')[1];
    if(token ==null){
        res.status(401);
        return;
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err)return res.status(403).json({message:err.message});
        req.user=user;
        next();
    })
}

const Login = async (req,res) => {
    try{
        let {email,password}=req.body;
        console.log(email);
        console.log(password);
        console.log(process.env.ACCESS_TOKEN_SECRET);
        let hashedPassword=await hashPassword(password);
        const profileFromDb= await Profile.findOne({"email":email});
        if(!profileFromDb){
            res.status(400).json({message:"no user found"});
            return;
        }
        console.log(hashedPassword);
        console.log(profileFromDb.password);
        let check= await verifyPassword(password,profileFromDb.password);
        if(!check){
            res.status(400).json({message:"password error"});
            return;
        }
        const user={username:email,lastName:profileFromDb.lastName};
        const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({accessToken:accessToken});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};


module.exports = {CreateProfile, GetAllProfiles, GetOneProfile,Login,authenticateToken}