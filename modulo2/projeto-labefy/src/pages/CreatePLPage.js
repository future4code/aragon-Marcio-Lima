import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { Container } from "../styles";

export default class CriarPlaylist extends React.Component {
  state = {
    nomePlaylist: "",
  };

  handleInput = (e) => {
    this.setState({ nomePlaylist: e.target.value });
  };

  criaPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist,
    };

    axios
      .post(`${BASE_URL}`, body, {
        headers: {
          Authorization: "marcio-lima-aragon",
        },
      })
      .then((response) => {
        alert(`Parabéns! Playlist criada com sucesso!`);
        console.log(response.data);
        this.setState({ nomePlaylist: "" });
      })
      .catch((error) => {
        alert(`OPS! Não foi dessa vez, tente novamente.`);
        console.log(error.message);
      });
  };

  render() {
    return (
      <Container>
        <h1>{this.state.nomePlaylist}</h1>
        <label>
          <input
            placeholder={"🎧 Nova playlist"}
            onChange={this.handleInput}
            value={this.state.nomePlaylist}
          ></input>
        </label>
        <button onClick={() => this.state.criaPlaylist}>
          Crie sua playlist
        </button>
      </Container>
    );
  }
}
