import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardTrip from "../components/CardTrip";
import Header from "../components/Header";
import { navigateToAdmin } from "../routes/cordinator";

const Title = styled.h2`
  position: relative;
  margin: 0 auto;
  width: fit-content;`

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
      <Title>Inscreva-se numa nova viagem!</Title>
      <hr />
      <CardTrip />
    </main>
  );
}
