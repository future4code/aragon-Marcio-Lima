import { Request, Response } from "express";
import connection from "../database/connection";

export const getResponsibles = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const taskId = req.params.taskId as string;

        const [idChecker] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = "${taskId}";
        `);

        if (!idChecker[0]) {
            errorCode = 404;
            throw new Error("Erro: Tarefa não encontrada no sistema.");
        }

        const [result] = await connection.raw(`
        SELECT
        Users.id,
        Users.nickname
        FROM Responsibles 
        JOIN Users
        ON Responsibles.userId = Users.id
        WHERE taskId = "${taskId}";
        `);

        if (!result[0]) {
            return res.status(200).send({
                message:
                    "Esta tarefa ainda não foi atribuída a nenhum usuário.",
            });
        } else {
            res.status(200).send({
                users: result,
            });
        }

        return res.status(200).send({
            message: "Lista de responsáveis por tarefa:",
            users: result,
        });
    } catch (error) {
        return res.status(errorCode).send({ message: error.message });
    }
};
