const Lead = require('../models/Lead');

// Create
exports.createLead = async (req, res) => {
    try {
        const lead = new Lead(req.body);
        await lead.save();
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ message: 'Lead not found' });
        res.status(200).json(lead);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lead) return res.status(404).json({ message: 'Lead not found' });
        res.status(200).json(lead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id);
        if (!lead) return res.status(404).json({ message: 'Lead not found' });
        res.status(200).json({ message: 'Lead deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllLead = async (req,res) => {
    try {
        const lead= await Lead.find({});
        res.status(200).json(lead);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllTenderByPublishingAuthId = async (req,res)=>{
    try {
        const tenders= await Lead.find({"PublisinghAuthObjectId":req.params.id});
        return res.status(200).json(tenders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};