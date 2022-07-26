import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PERFUMES } from "../database/tableNames"

export const getPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const query = req.query.q
        const sort = req.query.sort || ("name" && "brand")
        const order = req.query.order || "asc"

        if (query) {
            const result = await connection(TABLE_PERFUMES)
                .select()
                .where("name", "LIKE", `%${query}%`)
                .orWhere("brand", "LIKE", `%${query}%`)
                .orderBy(`${sort}`, `${order}`)

            return res.status(200).send({ perfumes: result })
        }

        const result = await connection(TABLE_PERFUMES)
            .select("*")
            .orderBy(`${sort}`, `${order}`)

        res.status(200).send({
            perfume: result,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
