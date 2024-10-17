const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
