const mongoose = require('mongoose')

const profileSchema =  new mongoose.Schema({
    firstName : String,
    lastName: String,
    email : String,
    dob: Date ,
    phoneNumber: String,
    password:String
})

const Profile = mongoose.model('Profile',profileSchema)

module.exports = Profile