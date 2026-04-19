import React from "react";
import { useState, memo } from "react";

const App = () => {
  return (
    <>
      <Header title="Abhay learns react" />
      <HeaderWithButton />
    </>
  );
};

const Header = memo(({ title }) => {
  return <h2>{title}</h2>;
});

const HeaderWithButton = () => {
  const [title, setTitle] = useState("");

  const updateButton = () => {
    setTitle(`Abhay have learnt react upto ${Math.random() * 100} percent`);
  };

  return (
    <>
      <button onClick={updateButton}>Click to know percent</button>
      <Header title={title}></Header>
    </>
  );
};
export default App;
