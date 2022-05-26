import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { navigateToAdmin } from "../routes/cordinator";
import TripDetailsPage from "./TripDetailsPage";

export default function HomePage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  const handleInputEmail = (e) => setInputEmail(e.target.value);
  const handleInputPassword = (e) => setInputPassword(e.target.value);

  const login = () => {
    const body = {
      email: inputEmail,
      password: inputPassword
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigateToAdmin(navigate)
        alert("Login efetuado com sucesso!")
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <main>
      <Header />
      <label htmlFor="email">Email:</label>
      <input
        onChange={handleInputEmail}
        type="text"
        id="email"
        value={inputEmail}
      />
      <br />
      <label htmlFor="password">Senha:</label>
      <input
        onChange={handleInputPassword}
        type="password"
        id="password"
        value={inputPassword}
      />
      <br />
      <button onClick={login}>Login</button>
      <hr />
      <h2>Inscreva-se numa nova viagem!</h2>
      <hr />
      <TripDetailsPage />
    </main>
  );
}