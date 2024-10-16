const mongoose = require('mongoose');
const PublishingAuth = require('./PublishingAuth');
const itemExports= require('./ItemDetails');
const itemDetailsSchema=itemExports.itemDetailsSchema;

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

const singleProduct = new mongoose.Schema(
    {

    }
)

const boqDetailsSchema = new mongoose.Schema({
    // LeadObjectId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Lead', // Reference to the Lead model
    //     required: true
    // },
    // Items: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Items', // Reference to the Items model
    //     required: true
    // }]
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
        type:[mongoose.Schema.Types.ObjectId],
        required:true
    }
});

const BoqDetails = mongoose.model('BoqDetails', boqDetailsSchema);

module.exports = BoqDetails;
