import React from "react";
import axios from "axios";
import BASE_URL from "../constants/urls";

export default class CriarPlaylist extends React.Component {
  state = {
    playlists: [],
  };

  savePlaylist = (data) => {
    this.setState({ playlists: data });
  };

  criaPlaylist = () => {
    const body = {
      name: "",
    };

    axios
      .post("${BASE_URL}", body, {
        headers: {
          Authorization: "marcio-lima-aragon",
        },
      })
      .then(() => {
        alert(`Parabéns! Playlist criada com sucesso!`);
        this.setState({ name: "" });
      })
      .catch((error) => {
        alert(`OPS! Não foi dessa vez, tente novamente.`);
        console.log(error.message);
      });
  };

  render() {
    return (
      <>
        <input
          placeholder={"Nova playlist"}
          onChange={this.state.playlists}
        ></input>
        <button onClick={() => this.state.savePlaylist}>
          Crie sua playlist
        </button>
      </>
    );
  }
}
