//---------------interpretação de código------------

//Exercício 1

//a. falso
//b. falso
//c. falso
//d. typeof booleano

//Exercício 2:

//O código original imprimiria apenas o último registro, isso acontece porque o comando prompt é uma string

/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero += segundoNumero

console.log(soma)*/

//Exercício 3:

//Minha sugestão seria colocar a variável Number() antes de prompt e o sinal de adição antes do igual (+=)

//---------------------Escrita de código----------------------

//Exercício 1:

/*let idadeDoUsuario = prompt("Quantos anos você tem?")
let idadeDoMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")
let mensagem = prompt("Sua idade é maior do que a do seu melhor amigo?")
const condicao = idadeDoUsuario > idadeDoMelhorAmigo
const diferencaDeIdade = Number(idadeDoUsuario) - Number(idadeDoMelhorAmigo)

console.log(condicao)
console.log(diferencaDeIdade)
*/

//Exercício 2:

/*const numeroPar = prompt("Por favor, insira um número par")
const restoDaDivisao = numeroPar % 2

console.log(numeroPar)
console.log(restoDaDivisao)
*/

// o resultado do resto da divisão sempre dará 0, pois todo o número par é divisível por 2

// quando o usuário insere um número ímpar, sempre resultará em 1, pois essa é a metade de 2

//Exercício 3:

/*let idadeDoUsuario = prompt("Quantos anos você tem?")
console.log(idadeDoUsuario)

let idadeEmMeses = Number(idadeDoUsuario * 12)
console.log(idadeEmMeses)

let idadeEmDias = Number(idadeEmMeses * 30)
console.log(idadeEmDias)

let idadeEmHoras = Number(idadeEmDias * 24)
console.log(idadeEmHoras)*/

//Exercício 4:

/*let n1 = prompt("Me fale um número")
let n2 = prompt("Me fale outro número")
console.log(n1, n2)

let p1 = prompt("O primeiro número é maior que o segundo?")
const condicao1 = n1 > n2

console.log(p1)
console.log(condicao1)

let p2 = prompt("O primeiro número é igual ao segundo?")
const condicao2 = n1 !== n2

console.log(p2)
console.log(condicao2)

let p3 = prompt("O primeiro número é divisível pelo segundo?")
const condicao3 = n1 / n2

console.log(p3)
console.log(condicao3)

let p4 = prompt("O segundo número é divisível pelo primeiro?")
const condicao4 = n2 / n1

console.log(p4)
console.log(condicao4)
*/














