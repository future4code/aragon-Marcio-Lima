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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulão'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U011HUGTNAX-c7ea7ad1214c-512'}
          fotoPost={'https://m.media-amazon.com/images/M/MV5BMTUxODM0NDcyNV5BMl5BanBnXkFtZTcwMjM5NzQ5MQ@@._V1_.jpg'}
        />

        <Post
          nomeUsuario={'Polly'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U028VH3R8RX-54ca126228df-512'}
          fotoPost={'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/12/Logo-Nirvana.jpg'}
        />

        <Post
          nomeUsuario={'Roni'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U032T1G6W01-46f78a3f6bcd-512'}
          fotoPost={'https://i.redd.it/ttu4xaj5imz21.png'}
        />
      </MainContainer>
    );
  }
}

export default App;
