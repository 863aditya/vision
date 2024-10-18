const mongoose = require('mongoose');

const itemDetailsSchema = new mongoose.Schema({
    ItemSerialNo:{
        type:String,
        required:true
    },
    ShortDesc: {
        type: String,
        required: true
    },
    LongDesc: {
        type: String,
        required: true
    },
    Uom: {
        type: String,
        required: true
    },
    Quantity :{
        type: String,
        required:true
    }
});
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
