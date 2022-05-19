import React from "react";
import myLogo from "./assets/tinder-2.svg";
import styled from "styled-components";

const Title = styled.p`
  font-size: 35px;
  font-weight: 700;
`;

function App() {
  return (
    <div className="App">
      <img src={myLogo} alt="logo" />
      <Title>AstroMatch</Title>
    </div>
  );
}

export default App;
