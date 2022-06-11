import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  goToCreateRecipe,
  goToDetails,
  goToLogin,
} from "../routes/coordinator";

export default function FeedPage() {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  const getRecipes = async () => {
    try {
      const res = await axios.get(
        "https://cookenu-api.herokuapp.com/recipe/feed",
        {
          headers: {
            Authorization: window.localStorage.getItem("token-cookenu"),
          },
        }
      );

      setRecipes(res.data);
    } catch (err) {
      console.error("Erro au buscar receitas");
      console.log(err);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token-cookenu");
    if (!token) {
      goToLogin(navigate);
    }
  }, []);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Header />
      <main>
        <button onClick={() => goToCreateRecipe(navigate)}>
          Criar receita
        </button>
        <section>
          <h1>Receitas</h1>
          {recipes.map((recipe) => (
            <article key={recipe.recipe_id}>
              <img src={recipe.image} alt={recipe.title} height="500px" />
              <h2>{recipe.title}</h2>
              <button onClick={() => goToDetails(navigate, recipe.recipe_id)}>
                Ver detalhes
              </button>
              <hr />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
