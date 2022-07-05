// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”),
// e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”).
// A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não.
// A carteira precisa ser renovada segundo os seguintes critérios:

// Critério 1) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos
// (se for exatamente 5 anos, deve ser renovada).

// Critério 2) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos
// (se for exatamente 10 anos, deve ser renovada).

// Critério 3) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

// - Entrada esperada → string, string
// - Saída esperada → boolean

// Dicas:

// - Você precisará da data atual para fazer as operações e uma opção é utilizar new Date() para obter a data atual.
// - Para fazer as operações necessárias, você pode converter as datas para timestamp usando o método .getTime() na data.