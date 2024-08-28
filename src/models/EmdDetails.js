const mongoose = require('mongoose');

const {EmdTypeEnum, BankEnum} = require('../constants/constant')

const emdDetailsSchema = new mongoose.Schema({
    EmdType: {
        type: String,
        enum: EmdTypeEnum, // Replace with actual enum values
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
        enum: BankEnum, // Replace with actual enum values
        required: true
    },
    ValidityRequired: {
        type: Number,
        required: true
    },
    ScanCopy: {
        type: Buffer, // Typically used for storing file data
        required: true
    }
});

const EmdDetails = mongoose.model('EmdDetails', emdDetailsSchema);

module.exports = EmdDetails;
