import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DisplayInfo = styled.figure`
  text-align: center;
  border: 6px solid black;
  background-image: linear-gradient(#9be0fc, white);
  border-radius: 180px;
  margin-left: 77vh;
  margin-right: 77vh;
  margin-top: 25px;
`;

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokeName);
  }, []);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.pokeName !== "") {
      pegaPokemon(props.pokeName);
    }
  }, [props.pokeName]);

  return (
    <DisplayInfo>
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      <p>Peso: {pokemon.weight} Kg</p>
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {pokemon.sprites && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width="200"
        />
      )}
    </DisplayInfo>
  );
}

export default PokeCard;
