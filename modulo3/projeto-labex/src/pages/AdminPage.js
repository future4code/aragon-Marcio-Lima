
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { navigateToHome } from "../routes/cordinator";
import TripDetailsPage from "./TripDetailsPage";

export default function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigateToHome(navigate);
    }
  }, []);

  return (
    <main>
      <Header />
      <hr />
      <h2>Crie uma nova viagem</h2>
      <hr />
      <TripDetailsPage />
    </main>
  );
}
