const PublishingAuth = require('../models/PublishingAuth');

// Create
exports.createPublishingAuth = async (req, res) => {
    try {
        const publishingAuth = new PublishingAuth(req.body);
        await publishingAuth.save();
        res.status(201).json(publishingAuth);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getPublishingAuth = async (req, res) => {
    try {
        const publishingAuth = await PublishingAuth.findById(req.params.id);
        if (!publishingAuth) return res.status(404).json({ message: 'PublishingAuth not found' });
        res.status(200).json(publishingAuth);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllPublishingAuth = async (req,res) =>{
    try{
        const pubAuth = await PublishingAuth.find({});
        res.status(200).json(pubAuth);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

// Update
exports.updatePublishingAuth = async (req, res) => {
    try {
        const publishingAuth = await PublishingAuth.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!publishingAuth) return res.status(404).json({ message: 'PublishingAuth not found' });
        res.status(200).json(publishingAuth);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deletePublishingAuth = async (req, res) => {
    try {
        const publishingAuth = await PublishingAuth.findByIdAndDelete(req.params.id);
        if (!publishingAuth) return res.status(404).json({ message: 'PublishingAuth not found' });
        res.status(200).json({ message: 'PublishingAuth deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
