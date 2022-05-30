import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardTrip from "../components/CardTrip";
import Header from "../components/Header";
import { navigateToHome } from "../routes/cordinator";

const TripContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-justify: inter-word;
  margin: 10px;
  padding: 20px;
 `
const Inputs = styled.input`
  margin-bottom: 12px;
  width: 12vw;
  text-align: center;`

const Select = styled.select`
  margin-bottom: 12px;
  width: 12vw;
  text-align: center;`

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
      <TripContainer>
      <h2>Crie uma nova viagem</h2>
      <label htmlFor="name">Nome</label>
      <Inputs
          id="name"
          name="name"
          type={"text"} />
      <label htmlFor="planets">Planeta</label>
      <Select id="planets">
          <option disabled>Escolha um planeta</option>
          <option value="mercury">Mercúrio</option>
          <option value="venus">Venus</option>
          <option value="earth">Terra</option>
          <option value="mars">Marte</option>
          <option value="jupiter">Júpiter</option>
          <option value="saturn">Saturno</option>
          <option value="uranus">Urano</option>
          <option value="neptune">Netuno</option>
          <option value="pluto">Plutão</option>
      </Select>
      <form action="/action_page.php">
      <label htmlFor="launch-date">Data de Lançamento</label>
      <br />
      <Inputs
          id="date"
          name="date"
          type="date" />
      </form>
      <label htmlFor="description">Descrição</label>
      <Inputs />
      <label htmlFor="duration">Duração (em dias)</label>
      <Inputs />
      <button>Criar</button>
      </TripContainer>
      <hr />
      <CardTrip />
    </main>
  );
}
