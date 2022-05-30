import { useEffect, useState } from "react";
import { base_URL, user } from "../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navigateToAdmin, navigateToTripDetails } from "../routes/cordinator";
import styled from "styled-components";

const Title = styled.h2`
  position: relative;
  padding-top: 5vh;
  margin: 0 auto;
  width: fit-content;`

const Name = styled.p`
  min-height: 1vh;
  margin-bottom: 0px;`

const Description = styled.p`
  min-height: 1vh;
  margin-bottom: 0px;`

const Planet = styled.p`
  min-height: 1vh;
  margin-bottom: 0px;`

const Duration = styled.p`
  min-height: 1vh;
  margin-bottom: 0px;`

const Date = styled.p`
  min-height: 1vh;
  margin-bottom: 0px;`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;`

export default function CardTrip() {
  const [trip, setTrip] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    tripList();
  }, [trip]);

  const tripList = () => {
    axios
      .get(`${base_URL}/${user}/trips`)
      .then((res) => {
        setTrip(res.data.trips);
        console.log(res.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigateToAdmin(navigate);
    }
  }, [navigate]);

  const deleteTrip = (id) => {
    const deleting = window.confirm(
      "Tem certeza que deseja deletar essa viagem?"
    );

    if (deleting) {
      axios
        .delete(`${base_URL}/${user}/trips/${id}`, {
          headers: {
            auth: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert("Viagem removida com sucesso")
          console.log(res)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const mappingTrips = trip.map((trip) => {
    return (
      <Container key={trip.id}>
        <Name><b>Nome:</b> {trip.name}</Name>
        <Description><b>Descrição:</b> {trip.description}</Description>
        <Planet><b>Planeta:</b> {trip.planet}</Planet>
        <Duration><b>Duração:</b> {trip.durationInDays}</Duration>
        <Date><b>Data:</b> {trip.date}</Date>

        {token && (
          <>
            <br />
            <button
              onClick={() => {
                navigateToTripDetails(navigate);
              }}
            >
              Exibir detalhes
            </button>
            <button
              onClick={() => {
                deleteTrip(trip.id);
              }}
            >
              Excluir viagem
            </button>
          </>
        )}
        <hr />
      </Container>
    );
  });

  return <main>
    <Title>Lista de Viagens</Title>
    {mappingTrips}
    </main>;
}
