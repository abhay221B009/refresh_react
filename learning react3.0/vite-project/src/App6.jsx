//Toodays agenda is :
// Learn about useCallback and memo in react

import React, { memo, useCallback, useState } from "react";

const App6 = () => {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("child clicked");
  }, []);

  return (
    <div>
      <Child inputFunction={inputFunction} />
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

const Child = memo(({ inputFunction }) => {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={inputFunction}>Button clicked</button>
    </div>
  );
});

export default App6;
