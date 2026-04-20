import React from "react";

//wrapper component
const CardWrapper = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Card Wrapper</h2>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <CardWrapper>
        <div>Hi there</div>
      </CardWrapper>

      <CardWrapper>
        <div>Hello there</div>
      </CardWrapper>
    </>
  );
};

export default App;
