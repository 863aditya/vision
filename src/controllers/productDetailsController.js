const {ProductDetails} = require('../models/ProductDetails');
// const ProductDetails=ProductDetails.ProductDetails;

// Create
exports.createProductDetail = async (req, res) => {
    try {
        const product = new ProductDetails(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getProductDetail = async (req, res) => {
    try {
        const product = await ProductDetails.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateProductDetail = async (req, res) => {
    try {
        const product = await ProductDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteProductDetail = async (req, res) => {
    try {
        const product = await ProductDetails.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'product not found' });
        res.status(200).json({ message: 'product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllProductDetail = async(req,res)=>{
    try{
        const reponse = await ProductDetails.find({});
        return res.status(200).json(reponse);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};