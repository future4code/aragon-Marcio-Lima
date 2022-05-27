import { useEffect, useState } from "react";
import { base_URL, user } from "../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navigateToTripDetails } from "../routes/cordinator";

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
        .then((res) => {})
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const mappingTrips = trip.map((trip) => {
    return (
      <div key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>

        {token && (
          <>
            <br />
            <button
              onClick={() => {
                deleteTrip(trip.id);
              }}
            >
              Excluir viagem
            </button>
            <button
              onClick={() => {
                navigateToTripDetails(navigate);
              }}
            >
              Ver detalhes
            </button>
          </>
        )}
        <hr />
      </div>
    );
  });

  return <div>{mappingTrips}</div>;
}
