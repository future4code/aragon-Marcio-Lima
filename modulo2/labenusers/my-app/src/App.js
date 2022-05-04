import React from "react";
import axios from "axios";
import ListaDeUsuarios from "./Components/ListaDeUsuarios";

export default class App extends React.Component {
  state = {
    paginaAtual: "página de cadastro",
    inputName: "",
    inputEmail: "",
  };

  mudaTela = () => {
    if (this.state.paginaAtual === "página de cadastro") {
      this.setState({ paginaAtual: "ListaDeUsuarios" });
    } else {
      this.setState({ paginaAtual: "página de cadastro" });
    }
  };

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  componentDidMount() {
    this.criaUsuario();
  }

  criaUsuario = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "marcio-lima-aragon",
          },
        }
      )
      .then(() => {
        alert(
          `Olá, ${this.state.inputName} seu cadastro foi concluído com sucesso!`
        );
        this.setState({ name: "", email: "" });
      })
      .catch((error) => {
        alert(`OPS! Erro ao preencher cadastro, tente novamente.`);
        console.log(error.message);
      });
  };

  render() {
    return (
      <>
        <main>
          <button onClick={this.mudaTela}>Trocar tela</button>
          <hr></hr>
          <label>
            <input
              value={this.state.inputName}
              onChange={this.onChangeName}
              placeholder={"Nome"}
            ></input>
            <input
              value={this.state.inputEmail}
              onChange={this.onChangeEmail}
              placeholder={"Email"}
            ></input>
          </label>
          <button onClick={this.criaUsuario}>Criar usuário</button>
        </main>
      </>
    );
  }
}
