import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const { name, price } = req.body;

        if (!name || !price) {
            errorCode = 422;
            throw new Error(
                "Erro: Um produto não pode ser cadastrado sem os parâmetros 'name' e 'price'."
            );
        }

        if (
            typeof name !== "string" ||
            typeof price !== "number" ||
            price <= 0
        ) {
            errorCode = 422;
            throw new Error(
                "Erro: O parâmetro 'name' deve ser do tipo string e o parâmetro preço deve ser um número maior que 0."
            );
        }

        const newProduct = {
            id: Date.now(),
            name,
            price,
        };

        await connection.raw(`
        INSERT INTO ${TABLE_PRODUCTS} (id, name, price)
        VALUES ("${newProduct.id}", "${newProduct.name}", "${newProduct.price}");
        `);

        return res.status(201).send({
            message: "Seu produto foi cadastrado com sucesso!",
            product: newProduct,
        });
    } catch (error) {
        return res.status(errorCode).send({
            message: error.message,
        });
    }
};
