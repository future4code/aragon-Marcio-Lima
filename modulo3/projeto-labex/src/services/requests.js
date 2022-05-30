import axios from "axios";
import { base_URL, user } from "../constants/urls";
import { navigateToAdmin } from "../routes/cordinator";

export const requestLogin = (email, password, navigate) => {
  const body = {
    email: email,
    password: password,
  };

  axios
    .post(`${base_URL}/${user}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      navigateToAdmin(navigate);
      alert("Login efetuado com sucesso!");
    })
    .catch((err) => {
      alert("Ops, ocorreu um erro! Tente novamente");
      console.log(err.message);
    });
};
