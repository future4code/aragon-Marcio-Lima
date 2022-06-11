import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLogin } from "../routes/coordinator";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token-cookenu");

  const logout = () => {
    if (window.confirm("Tem certeza que deseja sair?"))
      window.localStorage.removeItem("token-cookenu");
    goToLogin(navigate);
    alert("Até a próxima, volte logo.");
  };

  return (
    <HeaderContainer>
      <h1>Cookenu</h1>
      {token ? (
        <button onClick={logout}>Deslogar</button>
      ) : (
        <button onClick={() => goToLogin(navigate)}>Logar</button>
      )}
    </HeaderContainer>
  );
}
