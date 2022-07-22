import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const idChecker = await connection(TABLE_USERS)
            .select()
            .where("id", "=", `${id}`)

        if (idChecker.length === 0) {
            errorCode = 404
            throw new Error("Error: User not found.")
        }

        const result = await connection.raw(`
        SELETC
        name, price
        FROM Labe_Products
        JOIN Labe_Purchases
        ON Labe_Purchases.product_id = Labe_Products.id
        WHERE Labe_purchases.user_id = 
        `)

        res.status(200).send({
            message: "",
            result: result,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
