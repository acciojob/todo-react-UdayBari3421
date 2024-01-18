import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="box">
      <form className="subox">
        <p>To-Do-List</p>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
