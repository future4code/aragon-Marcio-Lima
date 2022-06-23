const primeiraLista = [
    {
        nome: "Banana"
    },
    {
        nome: "Laranja"
    }
]

const segundaLista = [
    {
        nome: "Laranja"
    },
    {
        nome: "Cebola"
    }
]

const geraItensUnicos = (lista1, lista2) => {
    const listaConcatenada = lista1.concat(lista2)
    const resultado = []

    for (let itemConcatenado of listaConcatenada) {
        const itemResultado = resultado.find((item) => item.nome === itemConcatenado.nome)
        if (!itemResultado) {
            resultado.push(itemConcatenado)
        }
    }

    return resultado
}

console.log(geraItensUnicos(primeiraLista, segundaLista))
