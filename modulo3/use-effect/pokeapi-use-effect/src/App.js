import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";
import styled from "styled-components";

const Div = styled.div`
  background-image: linear-gradient(yellow, white);
`;

const Header = styled.header`
  text-align: center;
  height: 150px;
  background-color: black;
  color: white;
`;

const H1 = styled.h1`
  padding-top: 55px;
`;

const H3 = styled.h3`
  margin-top: 15px;
`;

const Nav = styled.nav`
  text-align: center;
`;

const Seletor = styled.select`
  width: 150px;
  text-align: center;
  border-radius: 3px;
`;

function App() {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokelist(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (e) => {
    setPokeName(e.target.value);
  };

  const pokeOptions = pokeList.map((pokemon) => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <Div>
      <Header>
        <H1>Exibir Pokémon</H1>
      </Header>
      <hr />
      <Nav>
        <label htmlFor={"select-pokemon"}>
          <H3>Selecione seu pokemon: </H3>
        </label>
        <Seletor id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeOptions}
        </Seletor>
      </Nav>
      <main>{pokemon}</main>
    </Div>
  );
}

export default App;
