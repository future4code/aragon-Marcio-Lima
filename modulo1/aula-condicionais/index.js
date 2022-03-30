// // //EXERCÍCIO IF/ELSE

// function checaSeIgual(num1, num2) {
// //     if (num1 === num2){
// //         return "Os números são iguais."
// //     } else {
// //         return "Os números são diferentes"
// //     }
// //     let insiraNumero1 = prompt
// // }

// // const primeiroNumero = Number(prompt("Informe o primeiro número"))
// // const segundoNumero = Number(prompt("Informe o segundo número"))

// // const resultado = checaSeIgual(primeiroNumero, segundoNumero)


// // console.log(resultado)

// //exercício 3:

// function checaSeIgual(num1, num2){
//     if (num1 > num2){
//         return "O num1 é maior que o num2"
//     } else if (num1 < num2){
//         return "O num1 é menor que o num2"
//     } else {
//         return "O num1 é igual ao num2"
//     }
// }

// const primeiroNumero = Number(prompt("Informe o primeiro número"))
// const segundoNumero = Number(prompt("Informe o segundo número"))

// const resultado = checaSeIgual(primeiroNumero, segundoNumero)
// console.log(resultado)

//exercício 4:

// function checaTipoPokemon(pokemonInicial) {
//     switch (pokemonInicial) {
//         case "bulbassauro":
//             console.log("planta e veneno")
//             break
//         case "charmander":
//             console.log("fogo")
//             break
//         case "squirtle":
//             console.log("água")
//             break
//         default:
//             console.log("pokemon não encontrado.")
//     }
// }

// const pokemonEscolhido = prompt("Escolha o pokemon inicial")
// checaTipoPokemon(pokemonEscolhido)

// exercício 5:
function verificaRequisitosMatricula(isEnsinoMedioCompleto, isMaiorDeIdade, isCursandoFaculdade) {
    if (isEnsinoMedioCompleto && isMaiorDeIdade && !isCursandoFaculdade) {
        return "A pessoa pode se matricular."
    } else {
        return "A pessoa não pode se matricular."
    }
}

let resposta1 = prompt("Voce concluiu o ensino médio? (s/n)")
let resposta2 = prompt("Voce tem 18 anos ou mais? (s/n)")
let resposta3 = prompt("Voce estuda em outra faculdade? (s/n)")

if (resposta1 === "s") {
    resposta1 = true
} else {
    resposta1 = false
}
if (resposta2 === "s") {
    resposta2 = true
} else {
    resposta2 = false
}
if (resposta3 === "s") {
    resposta3 = true
} else {
    resposta3 = false
}

const resultado = verificaRequisitosMatricula(resposta1, resposta2, resposta3)
console.log(resultado)

