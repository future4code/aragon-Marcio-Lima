import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { navigateToHome } from "../routes/cordinator";
import { requestLogin } from "../services/requests";

const Main = styled.main`
  margin: 1vw;`

export default function Header() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInputValues = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value)
      case "password":
        return setPassword(e.target.value)    
      default:
        return
    }
  }

  const login = (e) => {
    e.preventDefault()
    requestLogin(email, password, navigate)
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigateToHome(navigate)
  }

  const renderizeHeader = localStorage.getItem("token") ? 
  (
    <button onClick={logout}>Logout</button>
  ) : (
    <form onSubmit={login}>
      <label htmlFor={"email"}>E-mail:</label>
      <input
          id="email"
          name="email"
          type={"text"}
          value={email}
          onChange={handleInputValues}
      />
      <br />
      <label htmlFor={"password"}>Senha:</label>
      <input 
          id="password"
          name="password"
          type={"password"}
          value={password}
          onChange={handleInputValues}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  )

  return (
    <Main>
      <h1>LabeX</h1>
      {renderizeHeader}
    </Main>
  );
}
