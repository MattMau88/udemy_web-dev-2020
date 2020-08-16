const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", function(req, res) {
  res.send("this is just an excercise page ...");
});

app.get("/contact", function(req, res) {
  res.send("contact me at ...");
});

app.get("/test", function(req, res) {
  res.send("test to check nodemon working ...");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
