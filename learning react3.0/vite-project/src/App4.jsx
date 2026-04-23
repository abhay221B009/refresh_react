//todays agenda is useMemo
import React, { useEffect, useMemo } from "react";
import { useState } from "react";

const App4 = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setinputValue] = useState(0);

  let count = useMemo(() => {
    let count = 0;
    for (let i = 0; i < inputValue; i++) {
      count = count + i;
    }
    return count;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setinputValue(Number(e.target.value));
        }}
        placeholder={"Find the sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
};

export default App4;
