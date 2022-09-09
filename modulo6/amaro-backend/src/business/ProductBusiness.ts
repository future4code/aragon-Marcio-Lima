import { tags } from "../database/migrations/data"
import { ProductDatabase } from "../database/ProductDatabase"
import { ForbiddenError } from "../errors/ForbiddenError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import {
    IGetProductsByIdInputDTO,
    IGetProductsInputDTO,
    IGetProductsOutputDTO,
    IPostProductInputDTO,
    IPostProductOutputDTO,
    IProductDB,
    Product,
} from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public registerProduct = async (input: IPostProductInputDTO) => {
        const { token, name, tag } = input

        if (!token) {
            throw new UnauthorizedError("Invalid or missing token")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new ForbiddenError("Only admins can register products")
        }

        if (!name) {
            throw new RequestError("Missing parameters")
        }

        if (typeof name !== "string") {
            throw new RequestError("Invalid parameter")
        }

        if (name.length < 3) {
            throw new Error("Product name must be at least 3 characters")
        }

        //enviar tag pelo nome, filtrar o resultado se vier vazio, criar uma nova tag

        const id = this.idGenerator.generate()
        const product = new Product(id, name.toUpperCase())

        await this.productDatabase.registerProduct(product)

        const response: IPostProductOutputDTO = {
            message: "Product registered successfully",
            product,
        }

        return response
    }

    public getProducts = async (input: IGetProductsInputDTO) => {
        const productsDB = await this.productDatabase.getProducts()

        const products = productsDB.map((productDB: any) => {
            return new Product(productDB.id, productDB.name)
        })

        for (let product of products) {
            const tags: any = await this.productDatabase.getTags(product.getId())

            product.setTags(tags)
        }

        const response: IGetProductsOutputDTO = {
            products,
        }

        return response
    }
}
