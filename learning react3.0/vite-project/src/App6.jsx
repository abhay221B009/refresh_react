import React, { memo, useState } from "react";

const App6 = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    console.log("child clicked");
  };
  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
};

const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

export default App6;
