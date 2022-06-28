let operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operacao) {
    case "add":
        return console.log(`O resultado da soma é ${num1 + num2}`)
    case "sub":
        return console.log(`O resultado da subtração é ${num1 - num2}`)
    case "mul":
        return console.log(`O resultado da multiplicação é ${num1 * num2}`)
    case "div":
        return console.log(`O resultado da divisão é ${num1 / num2}`)
}

