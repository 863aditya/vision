const mongoose = require('mongoose');

const publishingAuthSchema = new mongoose.Schema({
    Nickname: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Emails: {
        type: [String], // Array of strings for multiple emails
        required: true
    },
    PhoneNumbers: {
        type: [String], // Array of strings for multiple phone numbers
        required: true
    }
});

const PublishingAuth = mongoose.model('PublishingAuth', publishingAuthSchema);

module.exports = PublishingAuth;
