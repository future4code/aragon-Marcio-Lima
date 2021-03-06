import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
*{
  margin: 1;
  padding: 0;
  box-sizing: border-box;
  font-family: proxima-nova, sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
