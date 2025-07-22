const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    id:String,
    title:String,
    content:String
})

const postModel = mongoose.model('postdetails',postSchema)

module.exports = postModel