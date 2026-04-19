import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React in depth",
    },
    {
      id: 2,
      title: "Practice React",
      description: "Practice React in depth",
    },
    {
      id: 3,
      title: "Master React",
      description: "Master React in depth",
    },
  ]);

  return (
    <div>
      <button
        onClick={() =>
          setTodos([
            ...todos,
            {
              id: todos.length + 1,
              title: `Learn React ${todos.length + 1}`,
              description: `Learn React in depth ${todos.length + 1}`,
            },
          ])
        }
      >
        Add Todo
      </button>
      {todos.map((todo) => (
        <Maintodo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
};

const Maintodo = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
};

export default Todo;
