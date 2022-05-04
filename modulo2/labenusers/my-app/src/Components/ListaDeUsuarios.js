import React from "react";
import axios from "axios";

export default class ListaDeUsuarios extends React.Component {
  state = {
    usuariosCadastrados: [],
  };

  onChangeBuscar = (e) => {
    this.setState({ inputBuscar: e.target.value });
  };

  onClick = (e) => {
    this.setState({ salvarEdicao: e.target.value });
  };
  render() {
    return (
      <>
        <main>
          <button onClick={this.mudaTela}>Trocar tela</button>
          <hr></hr>
          <p>
            <b>Procurar Usuário</b>
          </p>
          <label>
            <input
              value={this.state.inputBuscar}
              onChange={this.onChangeBuscar}
              placeholder={"Nome exato para busca"}
            ></input>
          </label>
          <button onClick={this.salvarEdicao}>Salvar edição</button>
        </main>
      </>
    );
  }
}
