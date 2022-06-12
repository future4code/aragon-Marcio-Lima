import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { goToFeed, goToSignUp } from "../routes/coordinator";

const Main = styled.main`
  text-align: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 1em;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
  width: 120px;
  height: 40px;
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

const FormContainer = styled.form`
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://cookenu-api.herokuapp.com/user/login", form)
      .then((res) => {
        alert(res.data.message);
        window.localStorage.setItem("token-cookenu", res.data.token);
        goToFeed(navigate);
      })
      .catch((err) => {
        console.error("Erro ao se cadastrar");
        console.log(err);
      });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token-cookenu");
    if (token) {
      goToFeed(navigate);
    }
  }, []);

  return (
    <>
      <Main>
        <Header />
        <h1>Login</h1>
        <FormContainer onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChangeForm}
            required
          />
          <br />
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            name="password"
            value={form.password}
            onChange={onChangeForm}
            type="password"
            required
          />
          <br />
          <Button>Entrar</Button>
        </FormContainer>
        <Button onClick={() => goToSignUp(navigate)}>Cadastrar</Button>
      </Main>
    </>
  );
}
