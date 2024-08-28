const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    ItemSl: {
        type: String,
        required: true
    },
    ObjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemDetails', // Reference to the ItemDetails model
        required: true
    },
    Unit: {
        type: String,
        required: true
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
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;
