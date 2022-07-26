import { Request, Response } from "express"
import connection from "../database/connection"
import {
    TABLE_PRODUCTS,
    TABLE_PURCHASES,
    TABLE_USERS,
} from "../database/tableNames"
import { Purchase } from "../models/Purchase"

export const productPurchaseRecord = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.body.user_id
        const product_id = req.body.product_id
        const quantity = req.body.quantity

        if (!user_id || !product_id || !quantity) {
            throw new Error(
                "Error: Make sure you fill in the following parameters 'user_id', 'product_id' and 'quantity' correctly."
            )
        }

        if (typeof user_id !== "string" || typeof product_id !== "string") {
            errorCode = 422
            throw new Error(
                "Error: The following parameters 'user_id' and 'product_id' must be strings."
            )
        }

        if (typeof quantity !== "number" || quantity <= 0) {
            errorCode = 422
            throw new Error(
                "Error: The following parameter 'quantity' must be a number greater than 0."
            )
        }

        const userIdChecker = await connection(TABLE_USERS)
            .select()
            .where("id", "=", `${user_id}`)

        if (userIdChecker.length === 0) {
            errorCode = 404
            throw new Error(
                "Error: 'user_id' didn't match any results in our database."
            )
        }

        const productIdChecker = await connection(TABLE_PRODUCTS)
            .select()
            .where("id", "=", `${product_id}`)

        if (productIdChecker.length === 0) {
            errorCode = 404
            throw new Error(
                "Error: 'product_id' didn't match any results in our database."
            )
        }

        const productPrice: any = await connection(TABLE_PRODUCTS)
            .select("price")
            .where("id", "=", `${product_id}`)

        const newPurchase: Purchase = {
            id: Date.now().toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: quantity * productPrice[0].price,
        }

        await connection(TABLE_PURCHASES).insert({
            id: newPurchase.id,
            user_id: newPurchase.user_id,
            product_id: newPurchase.product_id,
            quantity: newPurchase.quantity,
            total_price: newPurchase.total_price,
        })

        return res.status(201).send({
            message: "Product purchase successfully recorded.",
            purchase: newPurchase,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
