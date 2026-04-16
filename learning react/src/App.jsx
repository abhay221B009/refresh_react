import React from "react";

//state , component
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);
  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
};

function CustomButton(props) {
  function OnClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={OnClickHandler}>Counter : {props.count}</button>;
}

export default App;
