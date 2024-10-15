const mongoose = require('mongoose');

const itemDetailsSchema = new mongoose.Schema({
    ItemSerialNo:{
        type:String,
        required:true
    },
    ShortDesc: {
        type: String,
        required: true
    },
    LongDesc: {
        type: String,
        required: true
    },
    Uom: {
        type: String,
        required: true
    }
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);

module.exports = ItemDetails;
