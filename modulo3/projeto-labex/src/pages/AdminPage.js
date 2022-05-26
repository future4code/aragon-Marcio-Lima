import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { navigateToHome } from "../routes/cordinator";
import TripDetailsPage from "./TripDetailsPage";

export default function AdminPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigateToHome(navigate);
    }

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3bUbdB1gvPzWrThpazVC",
        {
          headers: {
            auth: token
          }
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigateToHome(navigate);
    console.log("foi");
  };

  return (
    <main>
      <Header />
      <button onClick={logout}>Logout</button>
      <hr />
      <h2>Crie uma nova viagem</h2>
      <hr />
      <TripDetailsPage />
    </main>
  );
}
