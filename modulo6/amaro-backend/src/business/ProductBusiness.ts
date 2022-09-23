import { ProductDatabase } from "../database/ProductDatabase"
import { ForbiddenError } from "../errors/ForbiddenError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import {
    IGetProductsOutputDTO,
    IPostProductInputDTO,
    IPostProductOutputDTO,
    Product,
} from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
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
            throw new NotFoundError("Missing parameters")
        }

        if (typeof name !== "string") {
            throw new RequestError("Invalid parameter")
        }

        if (name.length < 3) {
            throw new RequestError("Product name must be at least 3 characters")
        }

        const id = this.idGenerator.generate()
        const product = new Product(id, name.toUpperCase(), tag)

        await this.productDatabase.registerProduct(product)

        const response: IPostProductOutputDTO = {
            message: "Product registered successfully",
            product,
        }

        return response
    }

    public getProducts = async (): Promise<IGetProductsOutputDTO> => {
        const productsDB = await this.productDatabase.getProducts()

        const products = productsDB.map((productDB: any) => {
            return new Product(productDB.id, productDB.name, productDB.tag)
        })

        for (let product of products) {
            const productId = product.getId()
            const tags = await this.productDatabase.getTags(productId)
            product.setTags(tags)
        }

        const response: IGetProductsOutputDTO = {
            products,
        }

        return response
    }

    public getProductById = async (id: string) => {
        const productsDB = await this.productDatabase.getProductById(id)

        const response = {
            productsDB,
        }

        return response
    }

    public findProductsByName = async (search: string) => {
        const productsDB = await this.productDatabase.searchProductsByName(search)

        const response = {
            productsDB,
        }
        return response
    }
}
