import React, { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setTaskInput(newValue);
  }

  function addTask() {
    setTasks((prevTasks) => {
      return [...prevTasks, taskInput];
    });
    setTaskInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={taskInput} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
