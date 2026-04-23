import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const App2 = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>

      <Todo id={selectedId} />
    </div>
  );
};

const Todo = ({ id }) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/todo?id=${id}`).then((res) => {
      setTodo(res.data.todo);
    });
  }, [id]); // ✅ MUST

  return (
    <div>
      <h1>{todo?.title}</h1>
      <h2>{todo?.description}</h2>
    </div>
  );
};

export default App2;
