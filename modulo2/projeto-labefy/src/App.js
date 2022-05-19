import React from "react";
import CreatePLPage from "./pages/CreatePLPage";
import DisplayPLPage from "./pages/DisplayPLPage";
import DetailPLPage from "./pages/DetailPLPage";
import { Container } from "./styles";

export default class App extends React.Component {
  state = {
    telaAtual: "home",
  };

  vaiParaCriarPL = () => {
    this.setState({ telaAtual: "criar playlist" });
  };

  vaiParaExibirPL = () => {
    this.setState({ telaAtual: "exibir playlist" });
  };

  vaiParaDetalhePL = () => {
    this.setState({ telaAtual: "ver detalhes" });
  };

  selecionaTela = () => {
    switch (this.state.telaAtual) {
      case "home":
        return;
      case "criar playlist":
        return <CreatePLPage vaiParaCriarPL={this.vaiParaCriarPL} />;
      case "exibir playlists":
        return <DisplayPLPage vaiParaExibirPL={this.vaiParaExibirPL} />;
      case "ver detalhes":
        return <DetailPLPage vaiParaDetalhePL={this.vaiParaDetalhePL} />;
      default:
        return "home";
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    return (
      <Container>
        <h1>Bem vindos à Labefy!!!</h1>

        <button onClick={() => this.mudaTela("criar playlist")}>
          Criar Playlist
        </button>
        <button onClick={() => this.mudaTela("exibir playlists")}>
          Exibir Playlists
        </button>
        <button onClick={() => this.mudaTela("ver detalhes")}>
          Detalhes das playlists
        </button>
        {this.selecionaTela()}
      </Container>
    );
  }
}
