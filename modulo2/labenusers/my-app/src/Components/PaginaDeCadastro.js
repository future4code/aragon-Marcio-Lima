import axios from "axios";
import React from "react";

export default class PaginaDeCadastro extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  handleName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  criaUsuario = async () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    try {
      const response = await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "marcio-lima-aragon",
          },
        }
      );
      alert(
        `Olá, ${this.state.inputName}! Seu cadastro foi concluído com sucesso!`
      );
      console.log(response.data);
      this.setState({ name: "", email: "" });
    } catch (error) {
      alert(`OPS! Erro ao preencher cadastro, tente novamente.`);
    }
  };

  render() {
    return (
      <>
        <button onClick={this.props.irParaLista}>
          Ir para página de lista
        </button>
        <hr></hr>
        <input
          placeholder={"Nome"}
          value={this.state.inputName}
          onChange={this.handleName}
        ></input>
        <input
          placeholder={"Email"}
          value={this.state.inputEmail}
          onChange={this.handleEmail}
        ></input>
        <button onClick={this.criaUsuario}>Criar usuário</button>
      </>
    );
  }
}
