const EmdType = require('../models/EmdType');

// Create a new EMD Type
exports.createEmdType = async (req, res) => {
    try {
        const emdType = new EmdType(req.body);
        const savedEmdType = await emdType.save();
        res.status(201).json(savedEmdType);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all EMD Types
exports.getAllEmdTypes = async (req, res) => {
    try {
        const emdTypes = await EmdType.find();
        res.status(200).json(emdTypes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
