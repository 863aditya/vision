const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;
