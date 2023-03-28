const express = require("express")
const router = express.Router()
const path = require("path")
const file = path.dirname(__dirname)



router.get("/home",(req,res) =>{
    res.sendFile(file + "/pages/home.html")
})
router.get("/calculator",(req,res)=>{
    res.sendFile(file + "/pages/calculator.html")
})


module.exports = router;