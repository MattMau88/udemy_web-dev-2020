const mongoose = require('mongoose');

// Connection URL
mongoose.connect('mongodb://localhost:27017/peopleDB', {useNewUrlParser: true, useUnifiedTopology: true});

// //create new schema
// const peopleSchema = new mongoose.Schema ({
//   name: {
//     type: String,
//     required: [true, "A person must have a name"]
//   },
//   age: {
//     type: Number,
//     min: 1,
//     max: 99
//   }
//   favoriteFruit: fruitsSchema
// });
//
// //use schema to create a Mongoose model
// const Person = mongoose.model("Person", peopleSchema);
//
// // create one new document
// const person = new Person ({
//   name: "Jimmy",
//   age: 99
// });

// person.save();

// creating multiple new documents/entries
// const elina = new Person({
//   name: "Elina",
//   age: 52
// })
//
// const mers = new Person({
//   name: "Mers",
//   age: 26
// })

// Person.insertMany([elina, mers], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully save multiple new entries to people")
//   }
// });

//finding entries
// Person.find(function(err, people){
//   if (err) {
//     console.log(err);
//   } else {
//
//     //too close the connection once done running an operation
//     mongoose.connection.close();
//
//     people.forEach((person) => {
//       console.log(person.name);
//     });
//   }
// });

//updating documents
// Person.updateOne({_id: "5f4bae17157619460622463b"},
//   {
//     name: "Ryan",
//     age: 40
//   },
//   function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated document");
//     }
//   }
// );

//deleting documents
// Person.deleteOne({ _id: "5f4bba3003029f4ae1d378c3" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted document");
//   }
// });

//RELATIONSHIPS
// add second schema to peopleDB
const fruitsSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "A fruit must have a name"]
  },
  score: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// use schema to create a Mongoose model
const Fruit = mongoose.model("Fruit", fruitsSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 5,
  review: "Weird taste"
})

//pineapple.save();
//
// //--pasting PeopleSchema from above here to again to create relationship after initiating fruitsSchema
// //create new schema
const peopleSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "A person must have a name"]
  },
  age: {
    type: Number,
    min: 1,
    max: 99
  },
  favoriteFruit: fruitsSchema
});

//use schema to create a Mongoose model
const Person = mongoose.model("Person", peopleSchema);

// // create one new document
// const person = new Person ({
//   name: "Amy",
//   age: 99,
//   favoriteFruit: pineapple
// });
//
// person.save();


// const apple = new Fruit({
//   name: "Apple",
//   score: 8,
//   review: "Great fruit"
// })
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 6,
//   review: "Kinda sour"
// })
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 9,
//   review: "Very nutricious"
// })
//
// Fruit.insertMany([apple, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully save multiple new entries to fruits")
//   }
// });

//ADDTIONAL, repetitive excercise
const mango = new Fruit({
  name: "Mango",
  score: "4",
  review: "Decent fruit"
})

mango.save();

Person.updateOne({name: "Mers"}, {favoriteFruit: mango}, function(err){
  if (err) {
    console.log(err);
  } else {
    //too close the connection once done running an operation
    mongoose.connection.close();

    console.log("Added favortite fruit to Mers");
  }
});
