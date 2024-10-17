const mongoose = require('mongoose');

const {EmdTypeEnum, BankEnum} = require('../constants/constant')

const emdDetailsSchema = new mongoose.Schema({
    EmdType: {
        type: String,
        required: true
    },
    EmdAmount: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    Bank: {
        type: String,
        required: true
    },
    ValidityRequired: {
        type: Number,
        required: true
    },
    ScanCopyId: {
        type: String, // Typically used for storing file data
        required: true
    }
});

const EmdDetails = mongoose.model('EmdDetails', emdDetailsSchema);

module.exports = EmdDetails;
