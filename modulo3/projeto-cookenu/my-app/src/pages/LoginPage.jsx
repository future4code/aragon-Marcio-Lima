import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToFeed, goToSignUp } from "../routes/coordinator";

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
      <Header />
      <main>
        <h1>Login</h1>
        <form onSubmit={login}>
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
          <button>Entrar</button>
        </form>
        <button onClick={() => goToSignUp(navigate)}>Cadastrar</button>
      </main>
    </>
  );
}
