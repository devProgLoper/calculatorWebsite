const express = require("express");


const app = express();

const port = 3000;

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  res.send("Thanks for posting that!");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
