const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
    Email: {
        type: String, // Array of strings for multiple emails
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;
