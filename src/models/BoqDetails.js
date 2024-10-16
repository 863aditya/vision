const mongoose = require('mongoose');
const PublishingAuth = require('./PublishingAuth');
const itemExports= require('./ItemDetails');
const itemDetailsSchema=itemExports.itemDetailsSchema;
const {productDetailScehma} = require('../models/ProductDetails')

const singleItem = new mongoose.Schema({
    Item:{
        type:itemDetailsSchema,
        required:true
    },
    ReqQty: {
        type: Number,
        required: true
    },
    SorRate: {
        type: Number,
        required: true
    },
    SorAmount: {
        type: Number,
        required: true
    }
})

const singleProduct = new mongoose.Schema({
    Product:{
        type:productDetailScehma,
        required:true 
    },
    ReqQty: {
        type: Number,
        required: true
    },
    SorRate: {
        type: Number,
        required: true
    },
    SorAmount: {
        type: Number,
        required: true
    }
})

const boqDetailsSchema = new mongoose.Schema({
    PublishingAuthId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true  
    },
    TenderNo:{
        type:mongoose.Schema.Types.String,
        required:true        
    },
    BoqSerialNo:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    ItemList:{
        type: [ singleItem],
        required:true         
    },
    ProductList:{
        type:[singleProduct],
        required:true
    }
});

const BoqDetails = mongoose.model('BoqDetails', boqDetailsSchema);

module.exports = BoqDetails;
