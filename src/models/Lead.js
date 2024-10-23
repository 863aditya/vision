const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    CompanyReferenceNo:{
        type:String,
        required:true
    },
    PublisinghAuthObjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PublishingAuth', // Assuming there's a related model named 'PublishingAuth'
        required: true
    },
    TenderName:{
        type:String,
        required:true 
    },
    TenderDescription:{
        type:String,
        required:true
    },
    TenderNo: {
        type: String,
        unique: true,
        required: true
    },
    TenderPublisingDate: {
        type: Date,
        required: true
    },
    TenderSubmissionDate: {
        type: Date,
        required: true
    },
    TenderFee: {
        type: Number,
        required: true
    },
    EmdDetailsObjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmdDetails', // Assuming there's a related model named 'EmdDetails'
        required: true
    },
    LeadEmail: {
        type: [String], // Array of strings for multiple emails
        required: true
    },
    LeadPhoneNumber: {
        type: [String], // Array of strings for multiple phone numbers
        required: true
    },
    TenderSource: {
        type: String,
        required: true
    }
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
