import React from "react";

const CardWrapper = ({ innerComponent }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Card Wrapper</h2>
      {innerComponent}
    </div>
  );
};

const TextComponent = () => {
  return <div>Hi there</div>;
};

const App = () => {
  return <CardWrapper innerComponent={<TextComponent />} />;
};

export default App;
