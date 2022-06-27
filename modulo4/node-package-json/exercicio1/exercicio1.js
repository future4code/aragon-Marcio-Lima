//a. Acessamos os parâmetros executando o process.argv[] no VS code
//b. 
const nome = process.argv[2]
const idade = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos!`)

//c.
let idadeEmSeteAnos = Number(idade) + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeEmSeteAnos}.`)