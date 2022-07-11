import express, { Request, Response } from "express"
import cors from "cors"
import { AccountHolder, Bill } from "./data/types"
import { customers } from "./data/data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Server is running on port 3003."))

// Endpoint 1 - Criar Conta
app.post("/customers", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { name, cpf, birthDate } = req.body
    const cpfChecker = customers.findIndex((customer) => customer.cpf === cpf)
    const customerBirth = birthDate.split("/")
    const customerName = name.split("")
    const currentYear = new Date().getFullYear()
    const customerAge = currentYear - customerBirth[2]

    if (!name || !cpf || !birthDate) {
      errorCode = 400
      throw new Error(
        "Erro 400: É necessário preencher todos os campos obrigatórios. Revise com atenção."
      )
    }

    if (
      typeof name !== "string" ||
      typeof cpf !== "string" ||
      typeof birthDate !== "string"
    ) {
      errorCode = 400
      throw new Error(
        "Erro 400! Os campos 'name', 'cpf' e 'birthDate' só aceitam o tipo string."
      )
    }

    if (customerAge < 18) {
      errorCode = 400
      throw new Error(
        "Erro 400! O cliente deve ter 18 anos ou mais para efetuar o cadastro."
      )
    }

    if (customerName.length < 3) {
      errorCode = 400
      throw new Error("Erro 400! O nome deve ter mais de três caracteres.")
    }

    if (cpfChecker < 0) {
      const newCustomer: AccountHolder = {
        id: Date.now(),
        name: name,
        cpf: cpf,
        birthDate: birthDate,
        balance: 0,
        bankStatement: [],
      }

      customers.push(newCustomer)
    } else {
      errorCode = 400
      throw new Error("Erro 400! CPF já cadastrado.")
    }

    res.status(201).send({
      mensagem: "Conta cadastrada com sucesso!",
      customers: customers,
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

// Endpoint 2 - Pegar saldo
app.get("/customers/:id", (req: Request, res: Response) => {
  let errorCode: number = 422
  try {
    const id = Number(req.params.id)
    const customerId = customers.findIndex((c) => c.id === id)

    if (!id) {
      errorCode = 422
      throw new Error("Erro 422! Id de usuário não informada.")
    }

    if (customerId < 0) {
      errorCode = 422
      throw new Error("Erro 422! Id inexistente.")
    }

    const result = customers
      .filter((costumer) => {
        return costumer.id === id
      })
      .map((item) => {
        return item.balance
      })

    res.status(200).send({
      customer: id,
      balance: `R$ ${result},00`,
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

// Endpoint 3 - Depositar
app.put("/customers/:id", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = Number(req.params.id)
    const { balance } = req.body
    const customerId = customers.findIndex((c) => c.id === id)

    if (customerId < 0) {
      errorCode = 400
      throw new Error("Erro 400! Id inexistente.")
    }

    if (typeof balance !== "number" || balance <= 0) {
      errorCode = 422
      throw new Error(
        "Erro 422! O valor do depósito deve ser um número maior que 0."
      )
    }

    const result = customers.filter((customer) => customer.id === id)
    const newBalance = result.map((item) => {
      return item.balance + balance
    })

    res.status(200).send({
      message: `Operação bem sucedida! Seu novo saldo é de R$ ${newBalance}`,
      customers: newBalance,
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
})
