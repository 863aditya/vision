const mongoose = require('mongoose');

const boqDetailsSchema = new mongoose.Schema({
    LeadObjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lead', // Reference to the Lead model
        required: true
    },
    Items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items', // Reference to the Items model
        required: true
    }]
});

const BoqDetails = mongoose.model('BoqDetails', boqDetailsSchema);

module.exports = BoqDetails;