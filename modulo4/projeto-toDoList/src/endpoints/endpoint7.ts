import { Request, Response } from "express";
import connection from "../database/connection";

export const deleteTask = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const taskId = req.params.taskId;

        const [tasks] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId};
        `);

        const [taskIdChecker] = tasks[0];

        if (!taskIdChecker[0]) {
            errorCode = 404;
            throw new Error("Erro: Id da tarefa não encontrado no sistema.");
        }

        if (taskIdChecker) {
            await connection.raw(`
            DELETE FROM Responsibles
            WHERE taskId ${taskId};
            `);
        }

        await connection.raw(`
        DELETE FROM Tasks
        WHERE id = ${taskId};
        `);

        res.status(200).send({
            message: "Tarefa deletada com sucesso!",
        });
    } catch (error) {
        return res.status(errorCode).send({ message: error.message });
    }
};
