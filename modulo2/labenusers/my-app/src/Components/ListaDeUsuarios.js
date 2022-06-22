import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuarios = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: large;
`;

export default class ListaDeUsuarios extends React.Component {
  state = {
    usuariosCadastrados: [],
    inputName: "",
  };

  componentDidMount() {
    this.guardarUsuarios();
  }

  handleName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  buscarUsuario = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=",
        {
          headers: {
            Authorization: "marcio-lima-aragon",
          },
        }
      );

      this.setState({ usuariosCadastrados: response.data });
    } catch (error) {}
  };

  guardarUsuarios = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "marcio-lima-aragon",
          },
        }
      );

      this.setState({ usuariosCadastrados: response.data });
    } catch (error) {
      alert("Ops, ocorreu um erro, tente novamente.");
    }
  };

  deletarUsuario = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "marcio-lima-aragon",
          },
        }
      )
      .then((response) => {
        alert("Usuário(a) deletado(a) com sucesso!");
        this.guardarUsuarios();
      })
      .catch((error) => {
        alert("Ops, não foi possível deletar usuário(a), tente novamente.");
      });
  };

  render() {
    const listaDeUsuarios = this.state.usuariosCadastrados.map(
      (usuarioCadastrado) => {
        return (
          <CardUsuarios key={usuarioCadastrado.id}>
            {usuarioCadastrado.name}
            <button onClick={() => this.deletarUsuario(usuarioCadastrado.id)}>
              <b>X</b>
            </button>
          </CardUsuarios>
        );
      }
    );
    return (
      <>
        <button onClick={this.props.irParaCadastro}>
          Ir para a página de registro
        </button>
        <hr></hr>
        <p>
          <b>Usuários Cadastrados:</b>
        </p>
        <label>
          <input
            placeholder={"Nome exato para busca"}
            value={this.state.inputName}
            onChange={this.handleName}
          ></input>
          <button onClick={() => this.buscarUsuario()}>
            Pesquisar usuário
          </button>
        </label>
        {listaDeUsuarios}
      </>
    );
  }
}
