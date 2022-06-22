import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function LoginPage() {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({email: "", password: "" })
  return (
    <main>
      <Header />
      <hr />
      <section>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <br />
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
          <br />
          <button type={"submit"}>Entrar</button>
        </form>
      </section>
      <section>
        <h3>Não tem cadastro? Clique no botão a seguir para se cadastrar:</h3>
        <button onClick={() => goToSignUpPage(navigate)}>Ir para cadastro</button>
      </section>
    </main>
  );
}
