import { Request, Response } from "express";
import connection from "../database/connection";

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const name = req.query.name as string;
        const nickname = req.query.nickname as string;

        if (name) {
            const [result] = await connection.raw(`
          SELECT * FROM Users
          WHERE (name) LIKE "%${name.toLowerCase()}%";
          `);

            return res.status(200).send({
                message: `Busca de usuário por nome bem-sucedida!`,
                users: result,
            });
        }

        if (nickname) {
            const [result] = await connection.raw(`
          SELECT * FROM Users
          WHERE (nickname) LIKE "%${nickname.toLowerCase()}%";
          `);

            return res.status(200).send({
                message: `Busca de usuário por apelido bem-sucedida!`,
                users: result,
            });
        }

        const [result] = await connection.raw(`
        SELECT * FROM Users;
        `);

        res.status(200).send({ users: result });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};
