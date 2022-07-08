import express, { Request, Response } from "express"
import cors from "cors"
import { User, users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Server runing on port 3003."))

// Exercício 2:
app.get("/users", (req: Request, res: Response) => {
    try {
        const role = req.query.role

        if (!role) {
            return res.status(200).send({
                query: role,
                users: users,
            })
        } else if (role !== "NORMAL" && role !== "ADMIN") {
            throw new Error(
                "Error 400 Bad Request. Role property must be 'NORMAL' or 'ADMIN'."
            )
        }

        const result = users.filter((user) => {
            return user.role === role
        })
        return res.status(200).send({
            query: role,
            users: result,
        })
    } catch (error) {
        res.send({
            mensagem: error.message,
        })
    }
})

// Exercício 3:

app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, email, role, age } = req.body

        if (!name || !email || !role || !age) {
            res.status(400)
            throw new Error("You must fill out all required properties.")
        }

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof age !== "number"
        ) {
            res.status(400)
            throw new Error(
                "Following properties 'name' and 'email' must be type of string, while 'age' must be type of number."
            )
        }

        if (role !== "NORMAL" && role !== "ADMIN") {
            throw new Error(
                "Error 400 Bad Request. Role property must be 'NORMAL' or 'ADMIN'."
            )
        }

        const validateEmail = users.findIndex((user) => user.email === email)
        if (validateEmail < 0) {
            const newUser: User = {
                id: Date.now(),
                name: name,
                email: email,
                role: role,
                age: age,
            }
            users.push(newUser)
            res.status(210).send({
                message: "User successfully created!",
            })
        } else {
            res.status(409).send({
                message: "Error 409! Email already exists.",
            })
        }
    } catch (error) {
        res.send({
            message: error.message,
        })
    }
})
/*
## Exercício 4

Crie um endpoint que edita o e-mail de um determinado usuário ****e retorna o usuário atualizado.

Entradas → id do usuário a ser editado e novo e-mail.

Validação de Input:

- id e e email devem existir.
- email deve ser do tipo string e o valor de id deve ser um número válido.

Regras de negócio:

- Se o id informado for válido, mas não existir em um dos usuários, um erro deverá ser exibido.
- Caso o e-mail enviado já exista para outro usuário cadastrado, um erro deverá ser exibido.

Saídas possíveis:

- Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
- Para sucesso teremos a mensagem de sucesso e o usuário atualizado.

## Exercício 5

Construa um endpoint que deleta um determinado usuário.

Entradas → id do usuário a ser deletado.

Validação de Input:

- id deve existir e ser um número.

Regras de negócio:

- Se o id fornecido não corresponder a um usuário existente, um erro deverá ser exibido.

Saídas possíveis:

- Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
- Para sucesso teremos somente a mensagem de sucesso.
*/
