import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'

const DadosPessoais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 30px;
  height: 200px;
`

function App() {
  return (
    <div className="App">
      <h2>Dados pessoais</h2>
      <DadosPessoais>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFrMSU3xj4WDA/profile-displayphoto-shrink_400_400/0/1647429635928?e=1655942400&v=beta&t=YVB-6k-S5X7Y3Ea7uMtN1AbPNRkSp7BTnX5DYspRrTQ"
          nome="Márcio Lima"
          descricao="Olá, me chamo Márcio e estou me aventurando (sem muito sucesso) nesse mundo de desenvolvedor web."
        />

        <ImagemButton
          imagem="https://pic.onlinewebfonts.com/svg/img_70394.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://www.iconspng.com/uploads/email-icon-black-circle-envelope.png"
          texto="Email:"
          email="marcio.lima@loggi.com"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
          texto="Endereço:"
          endereco="Carlos Gottuzo Giacoboni - 1274"
        />
      </DadosPessoais>

      <div className="bigcard-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://instagram.fpet4-1.fna.fbcdn.net/v/t51.2885-19/233545359_3070219446579659_3731527121585940889_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpet4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=wg1qXcIu6uwAX-BDC76&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT999U26GEKhu4kzL2gopL-l591dfUsokMy5NvUAuv_FdQ&oe=6265CDD2&_nc_sid=9a90d6"
          nome="Loggi"
          descricao="Desenvolvedor iniciante."
        />

        <CardGrande
          imagem="https://www.senacrs.com.br/imagens/senac_logo_mobi.png"
          nome="SENAC-RS"
          descricao="Auxiliar administrativo"
        />
      </div>

      <div className="bigcard-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
