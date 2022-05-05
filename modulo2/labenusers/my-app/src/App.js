import React from "react";
import PaginaDeCadastro from "./Components/PaginaDeCadastro";
import ListaDeUsuarios from "./Components/ListaDeUsuarios";
import styled from "styled-components";

export default class App extends React.Component {
  state = {
    paginaAtual: "cadastro",
  };

  mudaTela = () => {
    switch (this.state.paginaAtual) {
      case "cadastro":
        return <PaginaDeCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <ListaDeUsuarios irParaCadastro={this.irParaCadastro} />;
      default:
        return <p>Página não encontrada</p>;
    }
  };

  irParaCadastro = () => {
    this.setState({ paginaAtual: "cadastro" });
  };

  irParaLista = () => {
    this.setState({ paginaAtual: "lista" });
  };

  render() {
    return (
      <>
        <main>{this.mudaTela()} </main>
      </>
    );
  }
}
