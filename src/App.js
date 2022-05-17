import Post from "./components/Post";

function App() {
  return (
    <>
      <h1>Post</h1>
      <Post
        nomeUsuario={"Usuário"}
        fotoUsuario={"https://picsum.photos/75/75"}
        fotoPost={"https://picsum.photos/400/300"}
      />
    </>
  );
}

export default App;
