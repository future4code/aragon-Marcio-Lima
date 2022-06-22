import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { goBack, goToLogin } from "../routes/coordinator";

const Main = styled.main`
  margin: 1em;
  text-align: center;
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

export default function CreateRecipePage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const createRecipe = (e) => {
    e.preventDefault();
    axios
      .post("https://cookenu-api.herokuapp.com/recipe", form, {
        headers: {
          Authorization: window.localStorage.getItem("token-cookenu"),
        },
      })
      .then((res) => {
        alert(res.data.message);
        setForm({
          title: "",
          description: "",
          image: "",
        });
      })
      .catch((err) => {
        console.error("Erro ao criar receita");
        console.log(err);
      });
  };

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token-cookenu");
    if (!token) {
      goToLogin(navigate);
    }
  }, []);

  return (
    <>
      <Main>
        <Header />
        <h1>Adicionar nova receita</h1>
        <FormContainer onSubmit={createRecipe}>
          <label htmlFor="título">Título:</label>
          <input
            id="título"
            name="title"
            value={form.title}
            onChange={onChangeForm}
            required
          />
          <br />
          <label htmlFor="descricao">Descrição:</label>
          <input
            id="descricao"
            name="description"
            value={form.description}
            onChange={onChangeForm}
            required
          />
          <br />
          <label htmlFor="imagem">Link da imagem:</label>
          <input
            id="imagem"
            name="image"
            value={form.image}
            onChange={onChangeForm}
            required
          />
          <br />
          <Button>Criar</Button>
          <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </FormContainer>
      </Main>
    </>
  );
}
