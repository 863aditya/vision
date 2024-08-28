const UserProfile = require('../models/UserProfile');

// Create
exports.createUserProfile = async (req, res) => {
    try {
        const userProfile = new UserProfile(req.body);
        await userProfile.save();
        res.status(201).json(userProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getUserProfile = async (req, res) => {
    try {
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
