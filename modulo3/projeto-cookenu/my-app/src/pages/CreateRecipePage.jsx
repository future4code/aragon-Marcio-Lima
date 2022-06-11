import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goBack, goToLogin } from "../routes/coordinator";

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
      <Header />
      <main>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <h1>Adicionar nova receita</h1>
        <form onSubmit={createRecipe}>
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
          <button>Criar</button>
        </form>
      </main>
    </>
  );
}
