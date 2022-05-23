import Header from "../components/Header";
import TripDetailsPage from "./TripDetailsPage";

export default function AdminPage() {
  return (
    <main>
      <Header currentPage={"admin"} />
      <h2>Crie uma nova viagem</h2>
      <hr />
      <TripDetailsPage />
    </main>
  );
}
