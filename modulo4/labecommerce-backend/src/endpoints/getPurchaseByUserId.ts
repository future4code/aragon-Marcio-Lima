import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.params.user_id

        const idChecker = await connection(TABLE_USERS)
            .select()
            .where("id", "=", `${user_id}`)

        if (idChecker.length === 0) {
            errorCode = 404
            throw new Error("Error: User not found.")
        }

        const [result] = await connection.raw(`
        SELECT
        Labe_Purchases.id,
        Labe_Users.email,
        Labe_Products.name,
        Labe_Products.price,
        Labe_Purchases.quantity,
        Labe_Purchases.total_price
        FROM Labe_Purchases
        JOIN Labe_Users ON Labe_Purchases.user_id = Labe_Users.id
        JOIN Labe_Products ON Labe_Purchases.product_id = Labe_Products.id
        WHERE Labe_Purchases.user_id = "${user_id}";
        `)

        res.status(200).send({
            result: result,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
