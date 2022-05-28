import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../routes/cordinator";

export default function TripDetailsPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigateToHome(navigate)
    }
  }, [navigate])

  return (
    <main>
      <h2>Detalhes</h2>
    </main>
  );
}

