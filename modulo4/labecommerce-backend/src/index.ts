import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { ping } from "./endpoints/ping"
import { registerUser } from "./endpoints/registerUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import { registerProduct } from "./endpoints/registerProduct"
import { getAllProducts } from "./endpoints/getAllProducts"
import { productPurchaseRecord } from "./endpoints/productPurchaseRecord"
import { getUserPurchases } from "./endpoints/getPurchaseByUserId"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// Endpoint test
app.get("/ping", ping)

// Endpoint 1. Register user
app.post("/users", registerUser)

// Endpoint 2. Get all users
app.get("/users", getAllUsers)

// Endpoint 3. Register product
app.post("/products", registerProduct)

// Endpoint 4. Get all products
app.get("/products", getAllProducts)

// Endpoint 5. Product purchase record
app.post("/purchases", productPurchaseRecord)

// Endpoint 6. Get user's purchases
app.get("/users/:user_id/purchases", getUserPurchases)
