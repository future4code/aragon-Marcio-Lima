import { Request, Response } from "express";
import connection from "../database/connection";

export const updateNickname = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const userId = req.params.userId;
        const nickname = req.body.nickname;

        const [idChecker] = await connection.raw(`
        SELECT * FROM Users
        WHERE id = "${userId}";
        `);

        if (!idChecker) {
            errorCode = 404;
            throw new Error("Erro: Usuário não encontrado no sistema.");
        }

        if (typeof nickname !== "string") {
            errorCode = 404;
            throw new Error(
                "Erro: O apelido do usuário deve ser do tipo string."
            );
        }

        if (nickname.length < 3) {
            errorCode = 422;
            throw new Error(
                "Erro: O apelido do usuário deve ter ao menos 3 caracteres."
            );
        }

        await connection.raw(`
        UPDATE Users
        SET nickname = "${nickname}
        WHERE id = ${userId};
        `);

        res.status(200).send({
            message: "Apelido do usuário atualizado com sucesso!",
        });
    } catch (error) {
        res.status(errorCode).send({
            message: error.message,
        });
    }
};
