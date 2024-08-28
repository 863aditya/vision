const mongoose = require('mongoose');
const { RolesEnum } = require('../constants/constant');

const userProfileSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: [String], // Array of strings for multiple phone numbers
        required: true
    },
    Email: {
        type: [String], // Array of strings for multiple emails
        required: true
    },
    Role: {
        type: String,
        enum: RolesEnum, // Replace with actual roles
        required: true
    },
    EmployeeObjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', // Assuming there's a related 'Employee' model
        required: true
    }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
