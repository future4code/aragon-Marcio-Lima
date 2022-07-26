import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PERFUMES } from "../database/tableNames"
import { Perfume } from "../models/Perfume"

export const createPerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const brand = req.body.brand
        const price = req.body.price
        const ml = req.body.ml

        if (!name || !brand || !price || !ml) {
            throw new Error(
                "Ops! Algo saiu errado. Certifique-se de preencher corretamente os seguintes parâmetros: 'name', 'brand', 'price' e 'ml'."
            )
        }

        if (typeof name !== "string" || typeof brand !== "string") {
            errorCode = 422
            throw new Error(
                "Os parâmetros 'name' e 'brand' devem ser do tipo string."
            )
        }

        if (typeof price !== "number" || typeof ml !== "number") {
            errorCode = 422
            throw new Error(
                "Os parâmetros 'price' e 'ml' devem ser do tipo string."
            )
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("O preço do produto deve ser um valor maior que 0.")
        }

        const newPerfume: Perfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml,
        }

        await connection(TABLE_PERFUMES).insert({
            id: newPerfume.id,
            name: newPerfume.name,
            brand: newPerfume.brand,
            price: newPerfume.price,
            ml: newPerfume.ml,
        })

        res.status(201).send({
            perfume: newPerfume,
            message: "Novo perfume cadastrado com sucesso!",
        })
    } catch (error) {
        res.status(errorCode).send({
            message: error.message,
        })
    }
}
