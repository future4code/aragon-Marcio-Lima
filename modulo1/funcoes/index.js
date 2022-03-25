//-------------------------------Exercício de interpretação------------------------------

// Exercício 1:
// a. O console imprimirá: 5, 10
// b. O console não imprimiria na nada.

// Exercício 2:
/* a. Essa função permite combinar os métodos toLowerCase() com includes(). 
Ou seja. Ela retornará 'true' sempre que uma frase contiver o string alvo, não importando
se estiver escrito em maiúsculo.*/
// b. I: true, II: true, III: true

//---------------------------------Exercício de escrita----------------------------------

// Exercício 1:

// a.

function apresentacao(){
    console.log("Eu sou Márcio, tenho 43 anos, moro em Pelotas e sou estudante da Labenu.")
}

apresentacao()

// b.

function dadosPessoais(nome, idade, endereço, profissao){
    console.log(`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${endereço} e sou ${profissao}.`)
        
}

dadosPessoais("Márcio", 43, "Pelotas", "estudante da Labenu")

// Exercício 2:

// a.

function somaDoisNumeros(num1, num2){
    return num1 + num2
    
}
console.log(somaDoisNumeros(10, 5))

// b.

function doisNumeros(num1, num2){
    return num1 >= num2
}
console.log(doisNumeros(3, 7))

// c

function numeroPar(num){
    return num % 2 === 0
}
console.log(numeroPar(6))
console.log(numeroPar(11))

// d.

function fraseMaiuscula(){
    console.log("Hello, world!".length)
    return
}

fraseMaiuscula()

// Exercício 3:

let num1 = Number(prompt("digite 1 nũmero"))
let num2 = Number(prompt ("digite outro número"))

function soma(){
    return num1 + num2
}

function subtrai(){
    return num1 - num2
}

function multiplica(){
    return num1 * num2
}

function divide(){
    return num1 / num2
}

console.log(soma(30, 3), subtrai(30, 3), multiplica(30, 3), divide(30, 3))
