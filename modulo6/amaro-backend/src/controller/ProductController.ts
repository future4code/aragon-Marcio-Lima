import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { BaseError } from "../errors/BaseError"
import {
    IGetProductsByIdInputDTO,
    IGetProductsByTagInputDTO,
    IPostProductInputDTO,
} from "../models/Product"

export class ProductController {
    constructor(private productBusiness: ProductBusiness) {}

    public registerProduct = async (req: Request, res: Response) => {
        try {
            const input: IPostProductInputDTO = {
                token: req.headers.authorization,
                name: req.body.name,
                tag: req.body.tag,
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

            res.status(500).send({ message: "Unexpected error finding products" })
        }
    }

    public findProductsByName = async (req: Request, res: Response) => {
        try {
            const { name, tag } = req.query

            let response = {}

            if (name) {
                response = await this.productBusiness.findProductsByName(
                    name as string
                )
            }

            if (tag) {
                response = await this.productBusiness.findProductsByTag(
                    tag as string
                )
            }

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
        }
    }

    public getProductById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id as string

            const response = await this.productBusiness.getProductById(id)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
        }
    }

    // public findProductsByTag = async (req: Request, res: Response) => {
    //     try {
    //         const input: IGetProductsByTagInputDTO = {
    //             search: req.query.q as string,
    //         }

    //         const response = await this.productBusiness.findProductsByTag(input)
    //         res.status(200).send(response)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             return res.status(error.statusCode).send({ message: error.message })
    //         }
    //     }
    // }
}
