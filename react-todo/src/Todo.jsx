import React, { useState } from "react";
import "./App.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Event handler for updating the input field
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Function to add a todo
  const addTodo = () => {
    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  // Event handler for the Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Function to delete a todo
  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        id="todo-input"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        value={input}
      />
      <button id="button" onClick={addTodo}>
        Add Todo
      </button>
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button id="button" onClick={() => deleteTodo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
