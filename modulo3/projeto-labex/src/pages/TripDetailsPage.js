import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../routes/cordinator";
import { navigateToAdmin } from "../routes/cordinator"

export default function TripDetailsPage() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (!token) {
      navigateToHome(navigate)
    }
  }, [])

  return (
    <main>
      <h2>Lista de Viagens</h2>
      <button onClick={() => {navigateToAdmin(navigate)}}>Voltar para página de viagens</button>
    </main>
  );
}
