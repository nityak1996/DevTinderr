const express = require("express");
const app = express();

//order of code is matter alot !!!
app.get("/test",(req,res)=>{
    res.send("Hello from the server")
})

app.get("/user",(req,res)=>{
    res.send({firstName:"nitya ", lastName:"singh" })
})
app.post("/user",(req,res)=>{
    res.send("Data is successfully save to databse")
})
app.patch("/user",(req,res)=>{
    res.send("Data is successfully updated")
})
app.delete("/user",(req,res)=>{
    res.send("Data is successfully deletd")
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
