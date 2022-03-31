// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo(){
  const altura = prompt("Digite a altura.")
  const largura = prompt("Digite a largura.")
  const area = altura * largura
  console.log(area)

}
calculaAreaRetangulo(3, 5)

// EXERCÍCIO 02

function imprimeIdade() {
  return anoAtual - anoNascimento
}
const anoAtual = prompt("Em que ano estamos?")
const anoNascimento = prompt("Digite o ano em que nasceu")
console.log(imprimeIdade())

// EXERCÍCIO 03

function calculaIMC() {
  const peso = Number(prompt("Quantos quilos você pesa?"))
  const altura = Number(prompt("Qual é a sua altura?"))
  const altura1 = altura * altura
  return peso / altura1
}

console.log(calculaIMC())

// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Quantos anos você tem?")
  const email = prompt("Qual é o seu e-mail?")
  return `Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}.`
}
console.log(imprimeInformacoesUsuario())

// EXERCÍCIO 05

function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Escolha uma cor que")
  let cor2 = prompt("Escolha outra cor") 
  let cor3 = prompt("Escolha uma outra cor")
  return cores

}
console.log(imprimeTresCoresFavoritas(cores))

// EXERCÍCIO 06

function retornaStringEmMaiuscula(){
  return retornaStringEmMaiuscula.toUpperCase()
}
console.log(retornaStringEmMaiuscula)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}