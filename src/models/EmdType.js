const mongoose = require('mongoose');

const emdTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const EmdType = mongoose.model('EmdType', emdTypeSchema);

module.exports = EmdType;
