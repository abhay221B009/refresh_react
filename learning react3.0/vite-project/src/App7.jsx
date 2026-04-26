//TODAYS AGENDA IS TO LEARN ABOUT CUSTOM HOOKS IN REACT

import React from "react";
import useFetch from "./customHooks/useFetch";

const App7 = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default App7;
