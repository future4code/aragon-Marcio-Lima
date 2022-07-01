// ## Exercício 4

// O array abaixo traz as pessoas colaboradoras de uma empresa, com seus salários,
// setores e se trabalham presencialmente ou home office:

[
  { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
  { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
  { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
  { nome: "João", salário: 2800, setor: "marketing", presencial: false },
  { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
  { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
  { nome: "Paola", salário: 3500, setor: "marketing", presencial: true },
];

// Considerando o array acima, crie um ENUM para os setores e um type para as pessoas colaboradoras.
// Em seguida, crie uma função que receba este array como parâmetro
// e retorne apenas as pessoas do setor de marketing que trabalham presencialmente.

// - Entrada esperada → type[ ]
// - Saída esperada → type[ ]
// - Exemplo de saída:

[
  { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
  { nome: "Paola", salário: 3500, setor: "marketing", presencial: true },
];

// Dicas:

// - Após criar o ENUM você irá precisar alterar o array original, incluindo o ENUM no lugar das strings.
// - Para fazer a separação dentro das condições use o método .filter()
