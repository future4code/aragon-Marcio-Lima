import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { BaseError } from "../errors/BaseError"
import { IPostProductInputDTO } from "../models/Product"

export class ProductController {
    constructor(private productBusiness: ProductBusiness) {}

    public registerProduct = async (req: Request, res: Response) => {
        try {
            const input: IPostProductInputDTO = {
                token: req.headers.authorization,
                name: req.body.name,
            }
            const response = await this.productBusiness.registerProduct(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error registering product" })
        }
    }

    public getProducts = async (req: Request, res: Response) => {
        try {
            const response = await this.productBusiness.getProducts()

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            console.log(error)
            res.status(500).send({ message: "Unexpected error finding products" })
        }
    }
}
