const express = require("express");
const bodyParser = require("body-parser");
// const https = require('https');
// const request = require("request");

const app = express();
const port = 3000;

// app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.send("Hello");
  // res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  // console.log("Post received");
})

app.listen(process.env.PORT || port, function() {
  console.log("Server running on port " + port);
});
