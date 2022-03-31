// ---------------------------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -----------------------------------------------

// 1. 
// a) O console vai imprimir um array exatamente igual ao original, ou seja com todos os objetos e suas respectivas propriedades.

// 2.
// a) O console vai imprimir apenas a propriedade nome dos objetos do array.

// 3.
// a) O código vai filtar todos objetos do array que possuem a propriedade 'apelido:' diferente de "Chijo". Imprimindo assim, 
// os objetos (usuarios) nome: "Amanda Rangel", apelido: "Mandi" e "Laís Petra", apelido: "Laura".

// ------------------------------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------------------------------------

// 1. 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)

 const nomesPet = pets.map((nomeDoPet) => {
    return nomeDoPet.nome
 })

 console.log(nomesPet)

 // b)

const racasPet = pets.filter((racaDoPet) => {
    return racaDoPet.raca === "Salsicha"
})

console.log(racasPet)

// c)

const mensagemPoodles = pets.filter((poodles) => {
    return poodles.raca === "Poodle"
})

console.log(mensagemPoodles)

const apenasPoodles = mensagemPoodles.map((poodles) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}.`)
    return poodles.nome
})

console.log(apenasPoodles)

// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a)

 const nomesDosProdutos = produtos.map((nomeProduto) => {
     return nomeProduto.nome
 })

 console.log(nomesDosProdutos)

 // b)

 const cincoPorCentoDesconto = produtos.map((produto) => {
     return {
         nome: produto.nome,
         preco: produto.preco * 0.95
     }
 })

 console.log(cincoPorCentoDesconto)


 // c)

 const apenasBebidas = produtos.filter((itemBebidas) => {
     return itemBebidas.categoria === "Bebidas"
 })

 console.log(apenasBebidas)

 // d)

 const apenasYpe = produtos.filter((itemYpe) => {
     return itemYpe.nome.includes("Ypê")
 })

console.log(apenasYpe)


