import React from "react";
import Form from "./Form";

var userIsRegistered = true;
var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Form isRegistered={userIsRegistered} />}
    </div>
  );
}

export default App;
