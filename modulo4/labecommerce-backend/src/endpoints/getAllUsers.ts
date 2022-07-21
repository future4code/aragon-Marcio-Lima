import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"

export const getAllUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search = req.query.q

        if (search) {
            const result = await connection(TABLE_USERS)
                .select("*")
                .where("email", "LIKE", `%${search}%`)

            return res.status(200).send({
                users: result,
            })
        }

        const result = await connection(TABLE_USERS).select("*")

        res.status(200).send({
            users: result,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
