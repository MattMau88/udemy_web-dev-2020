const mongoose = require('mongoose');

// Connection URL
mongoose.connect('mongodb://localhost:27017/peopleDB', {useNewUrlParser: true, useUnifiedTopology: true});

//create new schema
const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

//use schema to create a Mongoose model
const Person = mongoose.model("Person", peopleSchema);

// create new documents
const person = new Person ({
  name: "John",
  age: 26
});

//person.save();

const dimi = new Person({
  name: "Dimi",
  age: 23
})

const matt = new Person({
  name: "Matt",
  age: 32
})

Person.insertMany([dimi, matt], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully save multiple new entries to people")
  }
});
