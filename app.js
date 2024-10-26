const express = require("express")
const app = express()
const PORT = 5000

app.use("/",(req,res)=>{
    res.send("Hello nitya singh")
})



app.listen(PORT,()=>{console.log(`server will be started at ${PORT}`)})