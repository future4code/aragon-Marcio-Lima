import styled from "styled-components";

export const Container = styled.div`
  * {
    padding: 5px;
    margin: 5px;
    box-sizing: border-box;
    font-family: ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
    font-size: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h1 {
    font-size: 400%;
  }

  input {
    height: 35px;
    border-radius: 15px 5px 15px 5px;
  }
  input:hover {
    height: 45px;
    cursor: text;
    background-color: RGBA(0, 255, 0, 0.06);
    border-radius: 15px 5px 15px 5px;
    transition: 0.5s;
  }

  button {
    height: 40px;
    width: 170px;
    margin-left: 15px;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 17px 5px 17px 5px;
    border: none;
  }

  button:hover {
    background-color: green;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
