import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PERFUMES } from "../database/tableNames"

export const updatePerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const price = req.body.price

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("O parâmetro 'price' deve ser um número.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("O preço do perfume deve ser um valor maior que 0.")
        }

        const perfumeExists = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if (perfumeExists.length === 0) {
            errorCode = 404
            throw new Error("Perfume não encontrado no sistema.")
        }

        await connection(TABLE_PERFUMES)
            .update({
                price: price,
            })
            .where({
                id: id,
            })

        res.status(200).send({
            message: "Preço do perfume alterado com sucesso!",
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
