/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const bemVindo = "Boas vindas ao jogo de Blackjack!"
console.log(bemVindo)

if (confirm("Quer iniciar uma nova rodada?")) {
} else {
   console.log("O jogo acabou.")
}

let primeiraCartaUsuario = comprarCarta()
let segundaCartaUsuario = comprarCarta()
let primeiraCartaPC = comprarCarta()
let segundaCartaPC = comprarCarta()

let totalUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${totalUsuario}`)

let totalPC = primeiraCartaPC.valor + segundaCartaPC.valor
console.log(`Computador - cartas: ${primeiraCartaPC.texto} ${segundaCartaPC.texto} - ${totalPC}`)

if (totalUsuario > totalPC) {
   console.log("O usuário ganhou!")
} else if (totalPC > totalUsuario) {
   console.log("O computador ganhou!")
} else if (totalUsuario === totalPC) {
   console.log("Empate!")
}