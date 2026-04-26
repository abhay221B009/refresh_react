import React from "react";
import { memo } from "react";

const App5 = () => {
  const [count, setCount] = React.useState(0);

  function onClick() {
    console.log(count);
  }
  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me{" "}
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

export default App5;
