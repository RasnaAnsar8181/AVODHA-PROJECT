const express = require("express")
const cors = require("cors")
const cl = require("cli-color")
const app = express()
const ConnectDb = require("./Config/DbConnect")
const router = require("./Routes/Postroute")

ConnectDb()

app.use(cors())
app.use(express.json())

app.use('/posts',router)

app.listen(8080,()=>{
    console.log('')
    console.log(cl.white.bgBlue("=========================================="))
    console.log(("Server is running successfully in the port"))
    console.log(cl.white.bgBlue("=========================================="))
    console.log('')
})