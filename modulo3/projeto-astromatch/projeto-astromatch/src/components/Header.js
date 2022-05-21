import styled from "styled-components";
import myLogo from "../assets/rocket-svgrepo-com-svg.png";

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const Botao = styled.button`
  font-size: 15px;
  letter-spacing: 1px;
  border: 3px solid #ff8fa6;
  background-color: red;
  color: white;
  border-radius: 15px 3px 15px 3px;
  width: 9.5em;
  height: 2.5em;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: red;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.6s;
    transform: scale(1);
  }
`;

export default function Header(props) {
  return (
    <>
      <img src={myLogo} alt="astromatch-logo" height="100" width="100" />
      <Title>Astromatch</Title>
      {props.page === "perfil" ? (
        <Botao onClick={props.goToMatchesPage}>Ir para perfis</Botao>
      ) : (
        <Botao onClick={props.goToProfilePage}>Ir para matches</Botao>
      )}
      <hr />
    </>
  );
}
