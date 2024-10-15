const mongoose = require('mongoose');

const publishingAuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company:{
        type:String,
        required:true
    },
    location: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const PublishingAuth = mongoose.model('PublishingAuth', publishingAuthSchema);

module.exports = PublishingAuth;
