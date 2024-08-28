const Items = require('../models/Items');

// Create
exports.createItem = async (req, res) => {
    try {
        const item = new Items(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getItem = async (req, res) => {
    try {
        const item = await Items.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateItem = async (req, res) => {
    try {
        const item = await Items.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteItem = async (req, res) => {
    try {
        const item = await Items.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
