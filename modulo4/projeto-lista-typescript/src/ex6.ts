type Cliente = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

const clientes = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

function retornaClientesNoVermelho (clientes: Cliente[]): Cliente[]{
  
  return
}

// - Entrada esperada → type[ ]
// - Saída esperada → type[ ]
// - Exemplo de saída:

// [
//     { cliente: 'Pedro', saldoTotal: -3340, debitos: [] },
//     { cliente: 'Luciano', saldoTotal: -1900, debitos: [] }
// ]

// Dicas:

// - Crie um type para os dados dos clientes.
// - Usar map() -> reduce() -> filter()
// - Para soma os débitos use o método .reduce()