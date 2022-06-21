const clientes = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

const cadastraCliente = (cliente) => {
  let indiceCliente = clientes.findIndex((obj) => obj.id === cliente.id);
  if (indiceCliente < 0) {
    clientes.push(cliente);
  } else {
    return console.log(
      `Erro. Parâmetro inválido (id: ${cliente.id} já existe).`
    );
  }
};

cadastraCliente({ id: 5, nome: "Betina" });
cadastraCliente({ id: 4, nome: "John Doe" });
cadastraCliente({ id: 5, nome: "Jane Doe" });
console.log(clientes);
