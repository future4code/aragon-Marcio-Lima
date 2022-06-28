const validaInput = (input) => {
    const resposta = {
        isErro: false,
        errors: []
    }

    const chaves = Object.keys(input)

    for (let chave of chaves) {
        if (input[chave] === undefined) {
            resposta.isErro = true
            resposta.errors.push(chave)
        }
    }

    return resposta
}

console.log(validaInput({ id: 1, nome: undefined }))
console.log(validaInput({ id: 1, nome: "Astrodev" }))
console.log(validaInput({ id: 1, nome: undefined, email: undefined }))