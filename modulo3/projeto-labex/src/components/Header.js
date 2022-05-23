import { useNavigate } from "react-router-dom";
import { navigateToAdmin, navigateToHome } from "../routes/cordinator";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <main>
      <h1>LabeX</h1>
      {props.currentPage === "homepage" ? (
        <button onClick={() => navigateToAdmin(navigate)}>Entrar</button>
      ) : (
        <button onClick={() => navigateToHome(navigate)}>Logout</button>
      )}
      <hr />
    </main>
  );
}
