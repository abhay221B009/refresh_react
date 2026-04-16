import React from "react";

//state , component

let state = {
  count: 0,
};
const App = () => {
  function onClickHandler() {
    alert("Button Clicked");
    state.count = state.count + 1;
  }

  return (
    <div>
      <button onClick={onClickHandler}> Counter {state.count}</button>
    </div>
  );
};

export default App;
