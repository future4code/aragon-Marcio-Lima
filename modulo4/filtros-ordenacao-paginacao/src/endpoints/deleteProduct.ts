import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const deleteProduct = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const id = req.params.id;

        if (!id) {
            errorCode = 422;
            throw new Error("Erro: Parâmetro inexistente.");
        }

        const [productIdChecker] = await connection.raw(`
        SELECT * FROM ${TABLE_PRODUCTS}
        WHERE id = "${id}";
        `);

        if (!productIdChecker[0]) {
            errorCode = 404;
            throw new Error("Erro: Produto não encontrado em nosso sistema.");
        }

        await connection.raw(`
        DELETE FROM ${TABLE_PRODUCTS}
        WHERE id = "${id}";
        `);

        return res.status(200).send({
            message: "Produto deletado com sucesso!",
        });
    } catch (error) {
        return res.status(errorCode).send({
            message: error.message,
        });
    }
};
