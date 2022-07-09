import express, { Request, Response } from "express"
import cors from "cors"
import { AccountHolder, Bill } from "./data/types"
import { customers } from "./data/data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Server is running on port 3003."))

// Exercício 1:
app.post("/customers", (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDate } = req.body

        if (!name || !cpf || !birthDate) {
            res.status(422)
            throw new Error(
                "Erro 422! É necessário preencher todos os campos obrigatórios. Revise com atenção."
            )
        }

        if (
            typeof name !== "string" ||
            typeof cpf !== "string" ||
            typeof birthDate !== "string"
        ) {
            res.status(400)
            throw new Error(
                "Erro 400! Os campos 'name', 'cpf' e 'birthDate' só aceitam o tipo string."
            )
        }

        const customerBirth = birthDate.split("/")

        const currentYear = Number(new Date())

        const customerAge = currentYear - Number(customerBirth[2])

        if (customerAge <= 18) {
            res.status(400)
            throw new Error(
                "Erro 400! O cliente deve ter 18 anos ou mais para efetuar o cadastro."
            )
        }

        const customerName = name.split("")

        if (customerName.length < 3) {
            res.status(400)
            throw new Error(
                "Erro 400! O nome deve ter mais de três caracteres."
            )
        }

        const cpfChecker = customers.findIndex(
            (customer) => customer.cpf === cpf
        )

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
            res.status(400)
            throw new Error("Erro 400! CPF já cadastrado.")
        }

        res.status(201).send({
            mensagem: "Conta cadastrada com sucesso!",
            customers: customers,
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})
