import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const registerProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error(
                "Error: Make sure you fill in the following parameters 'name' and 'price' correctly."
            )
        }

        if (typeof name !== "string") {
            errorCode = 422
            throw new Error(
                "Error: The following parameter 'name' must be a string."
            )
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error(
                "Error: The following parameter 'price' must be a number greater than 0."
            )
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name: name,
            price: price,
        }

        await connection(TABLE_PRODUCTS).insert({
            id: newProduct.id,
            name: newProduct.name,
            price: newProduct.price,
        })

        res.status(201).send({
            message: "New product successfully registered!",
            product: newProduct,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
