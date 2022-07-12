import express, { Request, Response } from "express"
import cors from "cors"
import { products, Product } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Server runing on port 3003")
})

// Exercício 1:
app.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).send({
            message: "API is working!",
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
        })
    }
})

// Exercício 3:
app.get("/products", (req: Request, res: Response) => {
    try {
        res.status(200).send({
            message: "Ok!",
            products: products,
        })
    } catch (error) {
        res.status(404).send({
            message: error.message,
        })
    }
})

// Exercício 4:
app.post("/products", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (typeof name !== "string" || name === "") {
            res.status(400)
            throw new Error("Error! Invalid input. Must be a valid ID.")
        }

        if (typeof price !== "number") {
            res.status(400)
            throw new Error("Error! Invalid input. Accept only numbers.")
        }

        if (price <= 0) {
            res.status(400)
            throw new Error("Error! Price must be greater than 0.")
        }

        const newProduct: Product = {
            id: (products.length + 1).toString(),
            name: name,
            price: price,
        }

        products.push(newProduct)

        res.status(201).send({
            message: "Product registered successfully!",
            products: products,
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})

// Exercício 5:
app.put("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const price = req.body

        if (typeof price !== "number") {
            res.status(400)
            throw new Error("Error! Invalid input. Accept only numbers.")
        }

        if (price <= 0) {
            res.status(400)
            throw new Error("Error! Price must be greater than 0.")
        }

        const index = products.findIndex((product) => {
            return product.id === id
        })

        if (index === -1) {
            res.status(400)
            throw new Error("Error! ID doesn't exist. Enter a valid ID")
        }

        const updatePrice = products
            .map((product) => {
                if (product.id === id) {
                    product.price = price
                }

                return product
            })
            .filter((product) => {
                return product.id === id
            })

        res.status(201).send({
            message: "Price has been updated successfully!",
            products: updatePrice,
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})

// Exercício 6
app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const index = products.findIndex((product) => {
            return product.id === id
        })

        if (index === -1) {
            res.status(400)
            throw new Error("Product not found!")
        }

        products.splice(index, 1)
        res.send({
            message: "Product successfully deleted!",
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})
