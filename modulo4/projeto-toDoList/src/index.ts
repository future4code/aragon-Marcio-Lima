import express, { Request, Response } from "express"
import cors from "cors"
import { ping } from "./endpoints/ping"
import { getUsers } from "./endpoints/getUsers"
import { getTasks } from "./endpoints/getTasks"
import { getResponsibles } from "./endpoints/getResponsibles"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Exercício 1
app.get("/users", getUsers)

// Exercício 2
app.get("/tasks", getTasks)

// Exercício 3
app.get("/tasks/:taskid/users", getResponsibles)
