// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b){return a-b})
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((num) => {
        return num % 2 === 0
    })

    return numerosPares
} 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((num) => {
        return num % 2 === 0
    })

    const numerosParesAoQuadrado = numerosPares.map((num) => {
        return num * num
    })

    return numerosParesAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity

    for (let numero of array) {
        if (maiorNumero < numero) {
            maiorNumero = numero
        }
    }

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11

const dadosDoFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
}
 
function retornaChamadaDeFilme(filme) {
    const chamada = `Venha assistir ao filme ${dadosDoFilme.nome}, de ${dadosDoFilme.ano}, dirigido por ${dadosDoFilme.diretor} e estrelado por ${dadosDoFilme.atores}.`
    return chamada
}

// EXERCÍCIO 12

const dadosPessoais = {
	nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}

function retornaPessoaAnonimizada(pessoa) {
    const usuarioAnonimo = {
    ...dadosPessoais,
    nome: ["ANÔNIMO"]
    }

    return usuarioAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
}

// EXERCÍCIO 15A
const pacientesAgendados = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
  ]
  
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordemAlfabetica = pacientesAgendados.map((dadosPacientes) => {
        return dadosPacientes.nome
    })
    console.log(ordemAlfabetica.sort())
}
retornaArrayOrdenadoAlfabeticamente()

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const ordemCronologica = pacientesAgendados.map((dadosPacientes) => {
        return dadosPacientes.dataDaConsulta
    })
    console.log(ordemCronologica)
}
retornaArrayOrdenadoPorData()
