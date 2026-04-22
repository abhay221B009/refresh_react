import React, { useState, useEffect } from "react";

const App1 = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos").then(async (res) => {
        const json = await res.json();
        console.log(json);
        setTodos(json.todos);
      });
    }, 2000);
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

const Todo = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default App1;
