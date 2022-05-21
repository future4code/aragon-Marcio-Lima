import axios from "axios";
import { useState, useEffect } from "react";
import { base_URL, student } from "../constants/urls";

export default function Match() {
  const [matches, setMatches] = useState({});

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(`${base_URL}/${student}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const displayMatches =
    matches &&
    matches.map((match) => {
      return (
        <div key={match.id}>
          <img
            src={match.photo}
            alt={`foto de ${match.name}`}
            height={"50px"}
          ></img>
          <p>{match.name}</p>
        </div>
      );
    });

  return (
    <>
      <h1>Matches</h1>
      {displayMatches}
    </>
  );
}
