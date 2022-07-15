import { Request, Response } from "express"
import connection from "../database/connection"

export const getResponsibles = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId

        const [taskForId] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = "${taskId}";
        `)

        if (!taskForId[0]) {
            errorCode = 422
            throw new Error("Erro: Tarefa não encontrada no sistema.")
        }

        const [result] = await connection.raw(`
        SELECT 
        Users.id ,
        Users.nickname
        FROM Users
        JOIN Responsibles
        ON Responsibles.userId = Users.id
        WHERE Tasks.id = ${taskId};
        `)

        res.status(200).send({
            message: `Lista de responsáveis por tarefa:`,
            user: result,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
