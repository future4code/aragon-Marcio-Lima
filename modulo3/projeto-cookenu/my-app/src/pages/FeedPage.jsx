import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import {
  goToCreateRecipe,
  goToDetails,
  goToLogin,
} from "../routes/coordinator";

const Main = styled.main`
  text-align: center;
  justify-content: center;
  background-color: red;
`;

const Section = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;

const FigureContainer = styled.div`
  img {
    margin: 1em;
    max-width: 280px;
    max-height: 200px;
    border: 3px solid white;
  }
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

const Title = styled.h1`
  margin: 1em;
`;

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
      <Main>
        <Button onClick={() => goToCreateRecipe(navigate)}>
          Criar receita
        </Button>
        <Title>Receitas</Title>
        <br />
        <Section>
          {recipes.map((recipe) => (
            <article key={recipe.recipe_id}>
              <figure>
                <h4>{recipe.title}</h4>
                <FigureContainer>
                  <img src={recipe.image} alt={recipe.title} />
                </FigureContainer>
              </figure>
              <Button onClick={() => goToDetails(navigate, recipe.recipe_id)}>
                Ver detalhes
              </Button>
            </article>
          ))}
        </Section>
      </Main>
    </>
  );
}
