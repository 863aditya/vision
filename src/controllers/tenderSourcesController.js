const TenderSource = require('../models/TenderSources');

// Create
exports.createTenderSource = async (req, res) => {
    try {
        const tender = new TenderSource(req.body);
        await tender.save();
        res.status(201).json(tender);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getTenderSource = async (req, res) => {
    try {
        const tender = await TenderSource.findById(req.params.id);
        if (!tender) return res.status(404).json({ message: 'TenderSource not found' });
        res.status(200).json(tender);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateTenderSource = async (req, res) => {
    try {
        const tender = await TenderSource.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tender) return res.status(404).json({ message: 'TenderSource not found' });
        res.status(200).json(tender);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteTenderSource = async (req, res) => {
    try {
        const tender = await TenderSource.findByIdAndDelete(req.params.id);
        if (!tender) return res.status(404).json({ message: 'TenderSource not found' });
        res.status(200).json({ message: 'TenderSource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllTenderSource = async (req,res) => {
    try {
        const tender= await TenderSource.find({});
        res.status(200).json(tender);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};