const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

app.get('/bmi', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmi', (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmiScore = weight / (height * height);
  res.send("The result is " + bmiScore);
});

app.listen(port, () => {
  console.log(`Practice app listening at http://localhost:${port}`);
});
