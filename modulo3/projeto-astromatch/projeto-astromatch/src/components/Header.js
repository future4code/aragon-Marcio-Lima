import styled from "styled-components";
import myLogo from "../assets/logo-fire.svg";

const Title = styled.p`
  font-size: 35px;
  font-weight: 700;
`;

const Botao = styled.button`
  font-size: 16px;
  border: 3px solid #ff8fa6;
  background-color: red;
  color: white;
  border-radius: 5em;
  width: 10em;
  height: 3em;
`;

export default function Header(props) {
  return (
    <>
      <img src={myLogo} alt="astromatch-logo" />
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
