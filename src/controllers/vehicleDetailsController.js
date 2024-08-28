const VehicleDetails = require('../models/VehicleDetails');

// Create
exports.createVehicleDetails = async (req, res) => {
    try {
        const vehicle = new VehicleDetails(req.body);
        await vehicle.save();
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getVehicleDetails = async (req, res) => {
    try {
        const vehicle = await VehicleDetails.findById(req.params.id);
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateVehicleDetails = async (req, res) => {
    try {
        const vehicle = await VehicleDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteVehicleDetails = async (req, res) => {
    try {
        const vehicle = await VehicleDetails.findByIdAndDelete(req.params.id);
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
        res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
