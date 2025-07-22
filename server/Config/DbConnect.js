const mongoose= require("mongoose")
const cl = require("cli-color")

const DbConnect = async() =>{
    try {
         const connect = await mongoose.connect('mongodb://localhost:27017/Posts')
         console.log(cl.white.bgMagenta("==============================="))
         console.log(("Database connected successfully"))
         console.log(cl.white.bgMagenta("==============================="))
    } catch (error) {
         console.log("There is an error ",error)
    }   
}

module.exports = DbConnect