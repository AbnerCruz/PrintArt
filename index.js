const express = require("express");
const router = require("./main/Routes/routes")








//Server Config
const app = express()
const PORT = 3000
app.listen(PORT,()=>{
    console.log("Server On")
})
app.use(express.static("./main/public"))

//Routes
app.use("/",router)