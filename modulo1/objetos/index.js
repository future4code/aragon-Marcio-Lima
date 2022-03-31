// ------------------------ Interpretaçãp de código
// Exercício 1:

// a) Vai aparecer na ordem:
// Matheus Nachtergaele
// Virginia Cavendish
// canal: Globo, horário: 14h



// Exercício 2:

// a) Vai aparecer 3 objetos (2 cópias) apenas com o nome alterado. Obj. 1: Juca, obj. 2: Juba, obj. 3: Jubo.
// b) Essa sintaxe permite criar cópias de um objeto ou de um array inteiro.

// Exercício 3: 
// a) Será impressa apenas 'false', referente e a propriedade 'backender' e 'undefined'.
// b) O valer "undefined" aparece, pois a propriedade "altura" não existe no objeto "pessoa".

// -------------------------- Exercício de escrita

// a) e b)

// Exercício 1:

const apelidos = {
    nome: "Márcio",
    apelidos: ["Ma", " Marcinho", " ou Sensei"]
}

const frase = `Eu sou ${apelidos.nome}, mas pode me chamar de ${apelidos.apelidos}`
console.log(frase)

function editarApelidos(objetoApelidos){
   
const frase = `Eu sou ${objetoApelidos.nome}, mas pode me chamar de ${objetoApelidos.apelidos}`
console.log(frase)
}
const novosApelidos = {

    ...apelidos,
    apelidos: ["Marcito", " Mamá", " ou M." ]
}
editarApelidos(novosApelidos)

// Exercício 2:

const pessoa1 = {
    nome: "Roberta",
    idade: 36,
    profissao: "monitora"
}
const pessoa2 = {
    nome: "Márcio",
    idade: 43,
    profissao: "desenvolvedor iniciante"
}
console.log(pessoa1, pessoa2)

function recebeObjetos(){
    const retornoPessoa1 = {
        nome: "Roberta",
        idade: 36,
        profissao: "monitora"
    }

    const retornoPessoa2 = {
        nome: "Márcio",
        idade: 43,
        profissao: "Desenvolvedor iniciante"
}

retornoPessoa1 = `${nome, idade, profissao}`
retornoPessoa2 = `${nome, idade, profissao}`

return retornoPessoa1, retornoPessoa2
}

console.log(recebeObjetos)

// Exercício 3:

const carrinho = [ ]

const fruta1 = {
    nome: "mamão",
    disponibilidade: true
}

const fruta2 = {
    nome: "manga",
    disponibilidade: true
}

const fruta3 = {
    nome: "laranja",
    disponibilidade: true
}
console.log(fruta1, fruta2, fruta3)

function recebeFrutas(){
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
}
recebeFrutas(carrinho)
