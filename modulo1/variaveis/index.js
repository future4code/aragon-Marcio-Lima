/* Exercícios de interpretação de código:
Exercício 1:

O primeiro console vai imprimir: 10

O segundo console vai imprimir: 10 5

Exercício 2:

let a = 10
let b = 20
let c = a // 10
b = c // 10
a = b // 10

console.log(a, b, c) //Vai imprimir: 10 10 10

Exercício 3:

let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let valorRecebidoPorDia = prompt("Quanto você recebe por dia?")
console.log("Voce trabalha diariamente", horasTrabalhadasPorDia, "horas e recebe", valorRecebidoPorDia, "reais por dia")

*/

//Exercício escrita de código
//Exerício 1:

let nome
let idade
console.log (typeof nome)
console.log (typeof idade)

//Como não havia valor atribuído ele retornou: undefined

nome = prompt ("Qual o seu nome?")
idade = prompt ("Quantos anos você tem?")

console.log (typeof nome)
console.log (typeof idade)

//O tipo das variáveis nome e idade retornou: string

console.log ("Olá", nome, "você tem", idade, "anos")

//Exercício 2:

let pergunta1 = "Você estuda programação?"
let pergunta2 = "Você tem filhos?"
let pergunta3 = "Você já viajou para Europa?"

let resposta1 = prompt (pergunta1)
let resposta2 = prompt (pergunta2)
let resposta3 = prompt (pergunta3)

console.log (pergunta1, " - ", resposta1)
console.log (pergunta2, " - ", resposta2)
console.log (pergunta3, " - ", resposta3)

//Exercício 3:

//introduzimos uma nova variável

let a = 10
let b = 25

let c = a
a = b
b = c

console.log(a)
console.log(b)









