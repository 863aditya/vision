const UserProfile = require('../models/UserProfile');
const mongoose =require('mongoose')
// Create
exports.createUserProfile = async (req, res) => {
    try {
        const userProfile = new UserProfile(req.body);
        await userProfile.save();
        res.status(201).json(userProfile);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
};

exports.getAllUserProfiles = async (req,res) =>{
    console.log("here in getallUserProfiles");
    try{
        
        const response=await UserProfile.find();
        res.status(200).json(response);
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({message:error.message});
    }
}

// Read
exports.getUserProfile = async (req, res) => {
    try {
        console.log("in user profile get page");
        const userProfile = await UserProfile.findById(req.params.id);
        if (!userProfile) return res.status(404).json({ message: 'UserProfile not found' });
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateUserProfile = async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!userProfile) return res.status(404).json({ message: 'UserProfile not found' });
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteUserProfile = async (req, res) => {
    try {
        const userProfile = await UserProfile.findByIdAndDelete(req.params.id);
        if (!userProfile) return res.status(404).json({ message: 'UserProfile not found' });
        res.status(200).json({ message: 'UserProfile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getUserProfileIdByEmpId = async(req,res) => {
    try{
        console.log("here in empid");
        console.log(req.params.id);
        const oid= new mongoose.Types.ObjectId(req.params.id);
        console.log(oid);
        const userProfile =  await UserProfile.findOne({EmployeeObjectId:oid
        });
        if(!userProfile)return res.status(404).json({ message: 'UserProfile not found' });
        res.status(200).json({id:userProfile._id});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};