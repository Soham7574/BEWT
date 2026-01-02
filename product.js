const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productname:String,
    price:Number,
    mfgDate:Date,
    productId:Number
},{timestamps:true})

module.exports = mongoose.model("product",productSchema)
