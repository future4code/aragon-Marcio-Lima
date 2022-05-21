import styled from "styled-components";

const Main = styled.main`
  height: 10vh;
  padding-top: 3vh;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
`;

export default function Footer() {
  return (
    <>
      <Main>
        <span>
          <p></p>
          <p>® All rights reserved.</p>
        </span>
      </Main>
    </>
  );
}
