import express, { Request, Response } from "express"
import cors from "cors"
import connection from "./database/connection"
import { Funcionarios } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}.`)
})

// Exercício 1:
app.get("/funcionarios", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const busca = req.query.busca as string

        if (busca) {
            const [resultado] = await connection.raw(`
            SELECT * FROM Funcionarios
            WHERE LOWER(name) LIKE "%${busca.toLowerCase()}%";
            `)

            return res.status(200).send({ funcionarios: resultado })
        }

        const resultado = await connection.raw(`
        SELECT * FROM Funcionarios;
        `)
        res.status(200).send({ resultado })
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
})

// Exercício 2:
app.post("/funcionarios", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, email } = req.body

        if (!name || !email) {
            errorCode = 400
            throw new Error("Erro: Parâmetro ausente.")
        }

        if (typeof name !== "string" || typeof email !== "string") {
            errorCode = 422
            throw new Error(
                "Erro: Parâmetros 'name' e 'email' devem ser do tipo string."
            )
        }

        if (!email.includes("@") || !email.includes(".")) {
            errorCode = 422
            throw new Error(
                "Erro: Formato de email inválido. Deve conter '@' e '.'."
            )
        }

        if (name.length <= 4) {
            errorCode = 422
            throw new Error(
                "Erro: Nome de usuário deve possuir ao menos 4 caracteres."
            )
        }

        const [validaEmail] = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE email = "${email}"
        `)

        if (validaEmail[0]) {
            errorCode = 422
            throw new Error("Erro: Email já cadastrado no sistema.")
        }

        const novoFuncionario: Funcionarios = {
            id: Date.now(),
            name: name,
            email: email,
        }

        await connection.raw(`
        INSERT INTO Funcionarios (id, name, email)
        VALUES (${novoFuncionario.id},"${novoFuncionario.name}","${novoFuncionario.email}")`)

        res.status(201).send({
            mensagem: "Novo usuário cadastrado com sucesso!",
            funcionarios: novoFuncionario,
        })
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
})

// Exercício 3:
app.put("/funcionarios/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Number(req.params.id)
        const email = req.body.email as string

        if (!email) {
            errorCode = 400
            throw new Error("Erro: Parâmetro ausente.")
        }

        if (typeof email !== "string") {
            errorCode = 422
            throw new Error("Erro: O email deve ser do tipo string.")
        }

        if (!email.includes("@") || !email.includes(".")) {
            errorCode = 422
            throw new Error(
                "Erro: Formato de email inválido. Deve conter '@' e '.'."
            )
        }

        const [validaEmail] = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE email = "${email}"
        `)

        if (validaEmail[0]) {
            errorCode = 422
            throw new Error("Erro: Email já cadastrado no sistema.")
        }

        const [validaId] = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE id = ${id}
        `)

        if (!validaId[0]) {
            errorCode = 404
            throw new Error("Erro: usuário não encontrado no sistema.")
        }

        await connection.raw(`
        UPDATE Funcionarios
        SET email = "${email}"
        WHERE id = ${id}
        `)

        res.status(200).send({
            mensagem: "Email atualizado com sucesso!",
        })
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
})

// Exercício 4:
app.delete("/funcionarios/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Number(req.params.id)

        const [validaId] = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE id = ${id}
        `)

        if (!validaId[0]) {
            errorCode = 404
            throw new Error("Erro: Usuário não encontrado no sistema.")
        }

        await connection.raw(`
        DELETE FROM Funcionarios
        WHERE id = ${id}
        `)

        res.status(200).send({
            mensagem: "Usuário deletado com sucesso!",
        })
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
})
