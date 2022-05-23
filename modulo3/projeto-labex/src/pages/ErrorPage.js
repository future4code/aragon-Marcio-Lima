import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { navigateToHome } from "../routes/cordinator";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <h2>Página não encontrada</h2>
      <button onClick={() => navigateToHome(navigate)}>Voltar ao início</button>
    </main>
  );
}
