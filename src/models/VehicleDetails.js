const mongoose = require('mongoose');

const vehicleDetailsSchema = new mongoose.Schema({
    VehicleName: {
        type: String,
        required: true
    },
    VehicleNumber: {
        type: String,
        required: true
    },
    TaxPaidUpto: {
        type: Date,
        required: true
    },
    FitnessUpto: {
        type: Date,
        required: true
    },
    PollutionNocUpto: {
        type: Date,
        required: true
    },
    InsuranceCo: {
        type: String,
        required: true
    },
    PolicyNo: {
        type: String,
        required: true
    },
    ValidUpto: {
        type: Date,
        required: true
    }
});

const VehicleDetails = mongoose.model('VehicleDetails', vehicleDetailsSchema);

module.exports = VehicleDetails;
