import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    postUsuarios: [
      {
        nomeUsuario: "Paulão",
        fotoUsuario: "https://ca.slack-edge.com/TLAVDH7C2-U011HUGTNAX-c7ea7ad1214c-512",
        fotoPost: "https://m.media-amazon.com/images/M/MV5BMTUxODM0NDcyNV5BMl5BanBnXkFtZTcwMjM5NzQ5MQ@@._V1_.jpg"
      },
      {
        nomeUsuario: "Polly",
        fotoUsuario: "https://ca.slack-edge.com/TLAVDH7C2-U028VH3R8RX-54ca126228df-512",
        fotoPost: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/12/Logo-Nirvana.jpg"
      },
      {
        nomeUsuario: "Roni",
        fotoUsuario: "https://ca.slack-edge.com/TLAVDH7C2-U032T1G6W01-46f78a3f6bcd-512",
        fotoPost: "https://i.redd.it/ttu4xaj5imz21.png"
      }
    ],
    valorInputUserName: "",
    valorInputUserPic: "",
    valorInputPostPic: "",
  };

  adicionaPostagem = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputUserName,
      fotoUsuario: this.state.valorInputUserPic,
      fotoPost: this.state.valorInputPostPic,
    };

    const novasPostagens = [...this.state.postUsuarios, novaPostagem];
    this.setState({
      postUsuarios: novasPostagens,
      valorInputUserName: "",
      valorInputUserPic: "",
      valorInputPostPic: "",
    });
  };

  onChangeInputName = (event) => {
    this.setState({ valorInputUserName: event.target.value });
  };

  onChangeInputPic = (event) => {
    this.setState({ valorInputUserPic: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPostPic: event.target.value });
  };

  render() {
    const listaDePosts = this.setState.postUsuarios.map((postagem) => {
      return (
        <Post
          nomeUsuario={postagem.nomeUsuario}
          fotoUsuario={postagem.fotoUsuario}
          fotoPost={postagem.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        <Post
          nomeUsuario={nomeUsuario}
          fotoUsuario={fotoUsuario}
          fotoPost={fotoPost}
        />
        <input
          value={this.state.valorInputUserName}
          onChange={this.state.valorInputUserName}
          placeholder={"Nome"}
        />
        <input
          value={this.state.valorInputUserPic}
          onChange={this.state.valorInputUserPic}
          placeholder={"Foto"}
        />
        <input
          value={this.state.valorInputPostPic}
          onChange={this.state.valorInputPostPic}
          placeholder={"Link da foto"}
        />
        <button onClick={this.adicionaPost}>Novo post</button>
        {listaDePosts}
      </MainContainer >
    );
  }
}

export default App;
