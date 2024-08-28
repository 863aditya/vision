const mongoose = require('mongoose');

const itemDetailsSchema = new mongoose.Schema({
    ShortDesc: {
        type: String,
        required: true
    },
    LongDesc: {
        type: String,
        required: true
    },
    Qty: {
        type: Number,
        required: true
    },
    Uom: {
        type: String,
        required: true
    }
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);

module.exports = ItemDetails;
