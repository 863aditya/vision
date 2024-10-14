const mongoose = require('mongoose');
const PublishingAuth = require('./PublishingAuth');

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
        type: [ mongoose.Schema.Types.ObjectId],
        required:true         
    },
    ProductList:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true
    }
});

const BoqDetails = mongoose.model('BoqDetails', boqDetailsSchema);

module.exports = BoqDetails;
