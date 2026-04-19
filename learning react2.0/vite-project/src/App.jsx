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

  // const updateButton = () => {
  //   setTitle(`Abhay have learnt react upto ${Math.random() * 100} percent`);
  // };
  //if we do not want to write this function separately then we can directly write it in onClick event as shown below

  return (
    <>
      <button
        onClick={() =>
          setTitle(
            `Abhay have learnt react upto ${Math.random() * 100} percent`,
          )
        }
      >
        Click to know percent
      </button>
      <Header title={title}></Header>
    </>
  );
};
export default App;
