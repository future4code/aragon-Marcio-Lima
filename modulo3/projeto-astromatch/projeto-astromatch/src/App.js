import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Match from "./pages/Match";
import Perfil from "./pages/Perfil";

function App() {
  const [inicio, setInicio] = useState("perfil");

  const vaiParaMatch = () => {
    setInicio("match");
  };

  const vaiParaPerfil = () => {
    setInicio("perfil");
  };

  const mostrarPagina = () => {
    switch (inicio) {
      case "perfil":
        return <Perfil />;
      case "match":
        return <Match />;
      default:
        return alert("Página não encontrada, tente novamente.");
    }
  };
  return (
    <div className="App">
      <nav>
        <Header
          pagina={inicio}
          vaiParaPerfil={vaiParaPerfil}
          vaiParaMatch={vaiParaMatch}
        />
        {mostrarPagina()}
        <Footer />
      </nav>
    </div>
  );
}

export default App;
