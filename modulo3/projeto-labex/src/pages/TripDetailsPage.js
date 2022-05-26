import { useParams } from "react-router-dom";

export default function TripDetailsPage() {
  const { id } = useParams;
  return (
    <main>
      <h2>Lista de Viagens{id}</h2>
    </main>
  );
}
