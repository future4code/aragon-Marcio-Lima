import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { goBack, goToLogin } from "../routes/coordinator";

const Figure = styled.figure`
  display: flex;
  margin: 2em;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Image = styled.img`
  margin: 1em;
  max-width: 500px;
  border: 3px solid black;
`;

const Description = styled.p`
  max-width: 500px;
  text-align: justify;
  text-justify: inter-word;
`;

const Button = styled.button`
  margin: 1em;
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
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <article>
          <Figure>
            <h2>{recipe.title}</h2>
            <Image src={recipe.image} alt={recipe.title} />
            <Description>{recipe.description}</Description>
          </Figure>
        </article>
      </main>
    </>
  );
}
