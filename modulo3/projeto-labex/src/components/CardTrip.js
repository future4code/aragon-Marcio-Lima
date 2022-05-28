import { useEffect, useState } from "react";
import { base_URL, user } from "../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navigateToAdmin, navigateToTripDetails } from "../routes/cordinator";

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
      <div key={trip.id}>
        <p><b>Nome:</b> {trip.name}</p>
        <p><b>Descrição:</b> {trip.description}</p>
        <p><b>Planeta:</b> {trip.planet}</p>
        <p><b>Duração:</b> {trip.durationInDays}</p>
        <p><b>Data:</b> {trip.date}</p>

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
      </div>
    );
  });

  return <div>
    <h2>Lista de Viagens</h2>
    {mappingTrips}
    </div>;
}
