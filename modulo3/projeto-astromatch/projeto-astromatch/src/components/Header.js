import styled from "styled-components";
import myLogo from "../assets/tinder-2.svg";

const Title = styled.p`
  font-size: 35px;
  font-weight: 700;
  display: flex;
`;

export default function Header(props) {
  return (
    <>
      <img src={myLogo} alt="logo" />
      <Title>Astromatch</Title>
      {props.pagina === "perfil" ? (
        <button onClick={props.vaiParaMatch}>Ir para perfis</button>
      ) : (
        <button onClick={props.vaiParaPerfil}>Ir para matches</button>
      )}
    </>
  );
}
