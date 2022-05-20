import { useState } from "react";
import styled from "styled-components";
import LikeButton from "../components/LikeButton";

const Botao = styled.button`
  margin: 5px;
  display: inline-block;
  background-color: white;
  color: red;
  border: none;
  width: 9em;
  height: 6em;
`;

export default function Perfil() {
  const [profile, setProfile] = useState({});

  const getProfile = () => {};

  return (
    <>
      <h1>Perfis</h1>
      <Botao>
        <p>
          <LikeButton />
        </p>
      </Botao>
      <Botao>
        <p>❌</p>
      </Botao>
    </>
  );
}
