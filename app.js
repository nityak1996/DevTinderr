const express = require("express");
const app = express();

app.get(
  "/user",
  (req, res,next) => {
    console.log("One")
    res.send("Handeling the route user1");
    next()
  },
  (req, res,next) => {
    console.log("two")
    // res.send("Handeling the route user2");
    next()
  },
  (req, res,next) => {
    console.log("three")
    res.send("Handeling the route user 3");
    next()
    
  },
  (req,res)=>{
    console.log("four")
    res.send("Handelin the router user 4")
  }
);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
