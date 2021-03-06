import { Request, Response } from "express";
import connection from "../database/connection";

export const addResponsibleUsers = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const taskId = req.params.taskId;
        const userId = req.body.userId;

        const [taskIdChecker] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId};
        `);

        if (!taskIdChecker[0]) {
            errorCode = 404;
            throw new Error("Erro: Id da tarefa não encontrado no sistema.");
        }

        const [idChecker] = await connection.raw(`
        SELECT *
        FROM Users
        WHERE id = ${userId};
        `);

        if (!idChecker[0]) {
            errorCode = 404;
            throw new Error("Erro: Id de usuário não encontrado no sistema.");
        }

        await connection.raw(`
        INSERT INTO Responsibles
        VALUES (${taskId}, ${userId});
        `);

        res.status(200).send({
            message: `Tarefa atribuída ao usuário ${userId}!.`,
        });
    } catch (error) {
        return res.status(errorCode).send({ message: error.message });
    }
};
