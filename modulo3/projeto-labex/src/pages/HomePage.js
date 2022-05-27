import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { navigateToAdmin } from "../routes/cordinator";
import TripDetailsPage from "./TripDetailsPage";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigateToAdmin(navigate);
    }
  }, []);

  return (
    <main>
      <Header />
      <hr />
      <h2>Inscreva-se numa nova viagem!</h2>
      <hr />
      <TripDetailsPage />
    </main>
  );
}
