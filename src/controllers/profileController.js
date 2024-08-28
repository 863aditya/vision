const Profile = require('../models/profile')
const argon2 = require('argon2')

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
        res.status(201).json(profiles);
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
        const profile= await Profile.findOne({email:email})
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


module.exports = {CreateProfile, GetAllProfiles, GetOneProfile}