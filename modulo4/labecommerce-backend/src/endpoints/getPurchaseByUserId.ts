import { Request, Response } from "express"

export const getPurchaseByUserId = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
