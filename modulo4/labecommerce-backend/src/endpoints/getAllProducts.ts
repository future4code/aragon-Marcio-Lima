import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const getAllProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search = req.query.q

        if (search) {
            const result = await connection(TABLE_PRODUCTS)
                .select("*")
                .where("name", "LIKE", `%${search}%`)

            return res.status(200).send({
                products: result,
            })
        }

        const result = await connection(TABLE_PRODUCTS).select("*")

        res.status(200).send({
            products: result,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
