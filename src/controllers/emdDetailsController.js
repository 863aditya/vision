const EmdDetails = require('../models/EmdDetails');

// Create an EMD Detail
exports.createEmdDetail = async (req, res) => {
    try {
        const emdDetail = new EmdDetails(req.body);
        const savedEmdDetail = await emdDetail.save();
        res.status(201).json(savedEmdDetail);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all EMD Details
exports.getAllEmdDetails = async (req, res) => {
    try {
        const emdDetails = await EmdDetails.find();
        res.status(200).json(emdDetails);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single EMD Detail by ID
exports.getEmdDetailById = async (req, res) => {
    try {
        const emdDetail = await EmdDetails.findById(req.params.id);
        if (!emdDetail) {
            return res.status(404).json({ error: 'EMD Detail not found' });
        }
        res.status(200).json(emdDetail);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an EMD Detail by ID
exports.updateEmdDetailById = async (req, res) => {
    try {
        const updatedEmdDetail = await EmdDetails.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedEmdDetail) {
            return res.status(404).json({ error: 'EMD Detail not found' });
        }
        res.status(200).json(updatedEmdDetail);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an EMD Detail by ID
exports.deleteEmdDetailById = async (req, res) => {
    try {
        const deletedEmdDetail = await EmdDetails.findByIdAndDelete(req.params.id);
        if (!deletedEmdDetail) {
            return res.status(404).json({ error: 'EMD Detail not found' });
        }
        res.status(200).json({ message: 'EMD Detail deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllEmdDetails = async (req, res) => {
    try {
        const emdDetails = await EmdDetails.find();
        res.status(200).json(emdDetails);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};