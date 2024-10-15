const { response } = require('express');
const BoqDetails = require('../models/BoqDetails');

// Create
exports.createBoqDetails = async (req, res) => {
    try {
        const boq = new BoqDetails(req.body);
        await boq.save();
        res.status(201).json(boq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getBoqDetails = async (req, res) => {
    try {
        const boq = await BoqDetails.findById(req.params.id).populate('Items');
        if (!boq) return res.status(404).json({ message: 'BOQ Details not found' });
        res.status(200).json(boq);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateBoqDetails = async (req, res) => {
    try {
        const boq = await BoqDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!boq) return res.status(404).json({ message: 'BOQ Details not found' });
        res.status(200).json(boq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteBoqDetails = async (req, res) => {
    try {
        const boq = await BoqDetails.findByIdAndDelete(req.params.id);
        if (!boq) return res.status(404).json({ message: 'BOQ Details not found' });
        res.status(200).json({ message: 'BOQ Details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getAllBoqDetails = async (req,res)=>{
    try {
        const reponse = await BoqDetails.find({});
        res.status(200).json(reponse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};