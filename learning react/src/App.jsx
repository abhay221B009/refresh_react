import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "learn react",
      description: "learn react in 1 month",
      isCompleted: false,
    },
    {
      title: "learn node",
      description: "learn node in 1 month",
      isCompleted: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "learn react in 1 month",
        isCompleted: false,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>

      {todos.map(function (todo, index) {
        return (
          <Todo key={index} title={todo.title} description={todo.description} />
        );
      })}
    </div>
  );
};

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
