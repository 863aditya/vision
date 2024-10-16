const mongoose = require('mongoose');
const itemExports = require('../models/ItemDetails')
const itemDetailsSchema=itemExports.itemDetailsSchema;
const productDetailScehma = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    itemList:{
        type:[itemDetailsSchema],
        required:true
    }
});

const ProductDetails = mongoose.model('ProductDetails', productDetailScehma);

module.exports = {ProductDetails,productDetailScehma};
