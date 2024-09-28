const mongoose = require('mongoose');

const employeeDetailsSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    FathersName: {
        type: String,
        required: true
    },
    FathersContactDetails: {
        type: String,
        required: true
    },
    SpouseName: {
        type: String,
        required: true
    },
    SpouseContactDetails: {
        type: String,
        required: true
    },
    DateOfBirth: {
        type: Date,
        required: true
    },
    PresentAddress: {
        type: String,
        required: true
    },
    PermanentAddress: {
        type: String,
        required: true
    },
    ContactDetails: {
        type: String,
        required: true
    },
    AadhaarDetails: {
        type: String,
        required: true
    },
    PanDetails: {
        type: String,
        required: true
    },
    DrivingLicenseNo: {
        type: String,
        required: true
    },
    DlValidityUpto: {
        type: Date,
        required: true
    },
    DlScan: {
        type: Buffer, // To store file data for DL Scan 1
        required: false
    },
    DlScan2: {
        type: Buffer, // To store file data for DL Scan 2
        required: false
    },
    BankAccountNo: {
        type: String,
        required: true
    },
    NameOfBankAndBranch: {
        type: String,
        required: true
    },
    IfscCode: {
        type: String,
        required: true
    },
    PfNo: {
        type: String,
        required: true
    },
    EsiCode: {
        type: String,
        required: true
    }
});

const EmployeeDetails = mongoose.model('EmployeeDetails', employeeDetailsSchema);

module.exports = EmployeeDetails;
