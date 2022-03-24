//-------------------Interpretação-------------------
// Exercício 1:

/*let array
console.log('a. ', array) // Como a variável não apresentou nenhum valor ela retorna como undefined.

array = null
console.log('b. ', array) // Variável de valor nulo (typeof null).

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11.

let i = 0
console.log('d. ', array[i]) // 3.

array[i+1] = 19
console.log('e. ', array) // Subistui o 4 pelo 19 na segunda posição do array [ 3 , 19, 5, 6, 7, 8, 9, 10, ... ]

const valor = array[i+6]
console.log('f. ', valor) // 9.*/

// Exercício 2:

//SUBI NUM ÔNIBUS EM MIRROCOS 27
//------------------------------------------------------


//------------------------Escrita-----------------------

// Exercício 1:

const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu e-mail")
const boasVindas = `Seu email: ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda (o) ${nomeDoUsuario}.`

console.log(nomeDoUsuario)
console.log(emailDoUsuario)
console.log(boasVindas)

// Exercício 2:

let pratosPreferidos = ["pizza", "batata frita", "bolinho de peixe", "salada de maionese", "frango ao molho de bergamota"]
const frase = "Essas são as minhas comidas favoritas:"

console.log(`${pratosPreferidos[0]}
${pratosPreferidos[1]}
${pratosPreferidos[2]}
${pratosPreferidos[3]}
${pratosPreferidos[4]}`)

const comidaFavoritaUsuario = prompt(`Qual a sua comida favorita?`)
pratosPreferidos[1] = comidaFavoritaUsuario

console.log(comidaFavoritaUsuario)
console.log(pratosPreferidos)

// Exercício 3:

const listaDeTarefas = []
listaDeTarefas[0] = "tarefa1"
listaDeTarefas[1] = "tarefa2"
listaDeTarefas[2] = "tarefa3"
tresTarefas = Number(prompt("Quais são as 3 tarefas que você vai realizar hoje?"))

console.log(listaDeTarefas)
console.log(tresTarefas) //exercício imcompleto







