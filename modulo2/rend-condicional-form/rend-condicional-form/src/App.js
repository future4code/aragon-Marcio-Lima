import React from "react";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";
import styled from "styled-components";

class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  vaiParaProximaEtapa = () => {
    this.setState({ etapa: this.setState.etapa + 1 });
  };

  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        {this.state.etapa < 4 ? (
          <button onClick={this.vaiParaProximaEtapa}>Prosseguir</button>
        ) : (
          ""
        )
        }

      </div>
    );
  }
}

export default App;
