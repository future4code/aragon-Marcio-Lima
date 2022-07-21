import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { ping } from "./endpoints/ping"
import { createUser } from "./endpoints/createUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import { createProduct } from "./endpoints/createProduct"
import { getAllProducts } from "./endpoints/getAllProducts"
import { registerPurchase } from "./endpoints/registerPurchase"
import { getPurchaseByUserId } from "./endpoints/getPurchaseByUserId"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// Endpoint de teste
app.get("/ping", ping)

// Endpoint 1. Cadastro de usuário
app.post("/users", createUser)

// Endpoint 2. Busca todos usuários
app.get("/users", getAllUsers)

// Endpoint 3. Cadastro de produto
app.post("/products", createProduct)

// Endpoint 4. Busca todos os produtos
app.get("/products", getAllProducts)

// Endpoint 5. Registro de compra de produto
app.post("/purchases", registerPurchase)

// Endpoint 6. Busca das compras de um usuário
app.get("users/:user_id/pruchases", getPurchaseByUserId)
