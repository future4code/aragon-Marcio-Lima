import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../routes/cordinator";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h2>Error 400 - Página não encontrada!</h2>
      <button onClick={() => navigateToHome(navigate)}>Voltar ao início</button>
    </main>
  );
}
