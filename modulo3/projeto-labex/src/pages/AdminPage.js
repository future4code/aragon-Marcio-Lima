
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardTrip from "../components/CardTrip";
import Header from "../components/Header";
import { navigateToHome } from "../routes/cordinator";

export default function AdminPage() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigateToHome(navigate);
    }
  }, [navigate]);

  return (
    <main>
      <Header />
      <hr />
      <h2>Crie uma nova viagem</h2>
      <label htmlFor="name" >Nome:</label>
      <input
          id="name"
          name="name"
          type={"text"}
      />
      <label htmlFor="planets">Planeta:</label>
      <select id="planets">
          <option value="mercury">Mercúrio</option>
          <option value="venus">Venus</option>
          <option value="earth">Terra</option>
          <option value="mars">Marte</option>
          <option value="jupiter">Júpiter</option>
          <option value="saturn">Saturno</option>
          <option value="uranus">Urano</option>
          <option value="neptune">Netuno</option>
          <option value="pluto">Plutão</option>
      </select>
      <form action="/action_page.php">
      <label htmlFor="launch-date">Data de Lançamento:</label>
      <input type="date" id="date" name="date" />
      </form>
      <label htmlFor="description">Descrição:</label>
      <input 
      />
      <label htmlFor="duration">Duração (em dias):</label>
      <input
      />
      <button>Criar</button>
      <hr />
      <CardTrip />
    </main>
  );
}
