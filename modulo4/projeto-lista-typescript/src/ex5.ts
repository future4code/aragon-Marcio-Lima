type Usuario = {
  name: string;
  email: string;
  role: string;
};

const usuarios = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

function retornaEmailsAdmin(usuarios: Usuario[]): string[] {
  let listaDeEmails = usuarios
    .filter((usuario) => {
      return usuario.role === "admin";
    })
    .map((usuario) => {
      return usuario.email;
    });

  return listaDeEmails;
}

console.log(retornaEmailsAdmin(usuarios));
