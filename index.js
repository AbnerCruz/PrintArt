const express = require("express");
const router = require("./main/Routes/routes")








//Server Config
const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server On")
})
app.use(express.static("./main/public"))

//Routes
app.get("/",(req,res),()=>{
    res.send("HelloWorld")
})
app.use("/admin",router)