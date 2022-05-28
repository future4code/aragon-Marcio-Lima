import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardTrip from "../components/CardTrip";
import Header from "../components/Header";
import { navigateToAdmin } from "../routes/cordinator";

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigateToAdmin(navigate);
    }
  }, [navigate]);

  return (
    <main>
      <Header />
      <hr />
      <h2>Inscreva-se numa nova viagem!</h2>
      <hr />
      <CardTrip />
    </main>
  );
}
