import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLogin } from "../routes/coordinator";
import img from "../assets/logo-cookenu.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
  margin-bottom: 2em;
`;

const Button = styled.button`
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
  width: 110px;
  height: 45px;
  border-width: 1px;
  color: #333333;
  border-color: #ffaa22;
  font-weight: bold;
  border-radius: 13px;
  box-shadow: 0px 1px 0px 0px #fff6af;
  text-shadow: 0px 1px 0px #ffee66;
  background: linear-gradient(#ffec64, #ffab23);
  &:hover {
    background: linear-gradient(#ffab23, #ffec64);
    text-transform: uppercase;
  }
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
      <img src={img} alt="cookenu-logo" width={"200px"} />
      {token && <Button onClick={logout}>Deslogar</Button>}
    </HeaderContainer>
  );
}
