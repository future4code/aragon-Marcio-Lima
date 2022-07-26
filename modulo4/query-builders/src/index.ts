import express from "express"
import cors from "cors"
import { ping } from "./endpoints/ping"
import { createPerfume } from "./endpoints/createPerfume"
import { getPerfumes } from "./endpoints/getPerfumes"
import { updatePerfume } from "./endpoints/updatePerfume"
import { deletePerfume } from "./endpoints/deletePerfume"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// Test
app.get("/ping", ping)

// Exercício 1
app.post("/perfumes", createPerfume)

// Exercício 2
app.get("/perfumes", getPerfumes)

// Exercício 3
app.put("/perfumes", updatePerfume)

// Exercício 4
app.delete("/perfumes", deletePerfume)
