import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { goBack, goToLogin } from "../routes/coordinator";

export default function RecipePage() {
  const [recipe, setRecipe] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  const getDetails = () => {
    axios
      .get(`https://cookenu-api.herokuapp.com/recipe/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("token-cookenu"),
        },
      })
      .then((res) => {
        setRecipe(res.data[0]);
      })
      .catch((err) => {
        console.error("Erro ao buscar detalhes da receita");
        console.log(err);
      });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token-cookenu");
    if (!token) {
      goToLogin(navigate);
    }
  }, []);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Header />
      <main>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <section>
          <article>
            <img src={recipe.image} alt={recipe.title} height="500px" />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </article>
        </section>
      </main>
    </>
  );
}
