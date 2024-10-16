const ItemDetail = require('../models/ItemDetails');
const ItemDetails=ItemDetail.ItemDetails;

// Create
exports.createItemDetails = async (req, res) => {
    try {
        const item = new ItemDetails(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getItemDetails = async (req, res) => {
    try {
        const item = await ItemDetails.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateItemDetails = async (req, res) => {
    try {
        const item = await ItemDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteItemDetails = async (req, res) => {
    try {
        const item = await ItemDetails.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllItemDetails = async(req,res)=>{
    try{
        const reponse = await ItemDetails.find({});
        return res.status(200).json(reponse);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};