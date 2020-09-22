import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Spead operator with Arrays
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];
console.log(fruits);

// Spread operator with Objects
const fullName = {
  fName: "James",
  lName: "Bond"
};
const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007"
};
console.log(user);
