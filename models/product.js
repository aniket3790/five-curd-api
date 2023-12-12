const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
    thumbnail:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('product',productSchema)