import axios from "axios";
import React from "react";
import { BASE_URL } from "../constants/urls";

export default class ExibirPlaylist extends React.Component {
  state = {
    playlistsGuardadas: [],
  };

  componentDidMount() {
    this.pegarPlyalistsGuardadas();
  }

  pegarPlyalistsGuardadas = () => {
    axios
      .get(`${BASE_URL}`, {
        headers: {
          Authorization: "marcio-lima-aragon",
        },
      })
      .then((res) => this.setState({ playlistsGuardadas: res.data.results }))
      .catch((error) => console.log(error));
  };

  render() {
    const componentePlaylists = this.state.playlistsGuardadas.map(
      (playlist) => {
        return { playlist };
      }
    );
    return { componentePlaylists };
  }
}
