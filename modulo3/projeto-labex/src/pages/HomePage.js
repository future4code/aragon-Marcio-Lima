import Header from "../components/Header";
import TripDetailsPage from "./TripDetailsPage";

export default function HomePage() {
  return (
    <main>
      <Header currentPage={"homepage"} />
      <h2>Inscreva-se numa nova viagem!</h2>
      <hr />
      <TripDetailsPage />
    </main>
  );
}
