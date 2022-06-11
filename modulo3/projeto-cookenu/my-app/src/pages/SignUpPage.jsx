import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToFeed, goToLogin } from "../routes/coordinator";

export default function SignUpPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("https://cookenu-api.herokuapp.com/user/signup", form)
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
        <h1>Cadastro</h1>
        <form onSubmit={signup}>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            name="name"
            value={form.name}
            onChange={onChangeForm}
            required
          />
          <br />
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
          <button>Cadastrar</button>
        </form>
        <button onClick={() => goToLogin(navigate)}>Já tenho conta</button>
      </main>
    </>
  );
}
