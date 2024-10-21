const mongoose = require('mongoose');

const itemDetailsSchema = new mongoose.Schema({
    ItemObjectId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
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
