import { Request, Response } from "express"
import connection from "../database/connection"

export const getTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const title = req.query.title as string
        const description = req.query.description as string

        if (title) {
            const [result] = await connection.raw(`
          SELECT * FROM Tasks
          WHERE (title) LIKE "%${title.toLowerCase()}%";
          `)

            return res.status(200).send({
                message: `Busca de tarefa por título bem-sucedida!`,
                tasks: result,
            })
        }

        if (description) {
            const [result] = await connection.raw(`
          SELECT * FROM Tasks
          WHERE (description) LIKE "%${description.toLowerCase()}%";
          `)

            return res.status(200).send({
                message: `Busca de tarefa por descrição bem-sucedida!`,
                tasks: result,
            })
        }

        const [result] = await connection.raw(`
      SELECT * FROM Tasks;
      `)

        res.status(200).send({ tasks: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
