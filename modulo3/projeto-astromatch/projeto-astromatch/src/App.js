import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Match from "./pages/Match";
import Perfil from "./pages/Perfil";

function App() {
  const [home, setHome] = useState("match");

  const goToMatchesPage = () => {
    setHome("match");
  };

  const goToProfilePage = () => {
    setHome("perfil");
  };

  const displayPage = () => {
    switch (home) {
      case "perfil":
        return <Match />;
      case "match":
        return <Perfil />;
      default:
        return alert("Página não encontrada, tente novamente.");
    }
  };
  return (
    <div>
      <nav>
        <Header
          page={home}
          goToProfilePage={goToProfilePage}
          goToMatchesPage={goToMatchesPage}
        />
        {displayPage()}
        <Footer />
      </nav>
    </div>
  );
}

export default App;
