const mongoose =require('mongoose')

const TenderSourceSchema= new mongoose.Schema({
    name:String,
})

const TenderSource=mongoose.model('TenderSource',TenderSourceSchema)
module.exports= TenderSource