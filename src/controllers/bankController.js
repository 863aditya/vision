const Bank = require('../models/Bank');

// Create a new Bank
exports.createBank = async (req, res) => {
    try {
        const bank = new Bank(req.body);
        const savedBank = await bank.save();
        res.status(201).json(savedBank);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all Banks
exports.getAllBanks = async (req, res) => {
    try {
        const banks = await Bank.find();
        res.status(200).json(banks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
