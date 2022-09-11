import { ProductDatabase } from "../database/ProductDatabase"
import { ForbiddenError } from "../errors/ForbiddenError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import {
    IGetProductsByIdInputDTO,
    IGetProductsByTagInputDTO,
    IGetProductsByTagOutputDTO,
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

    public getProductById = async (input: IGetProductsByIdInputDTO) => {
        const productId = input.productId

        const productDB = await this.productDatabase.getProductById(productId)

        const product = productDB.map((productDB) => {
            return new Product(productDB.id, productDB.name)
        })

        const response = {
            product,
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

    public getProductsByTag = async (input: IGetProductsByTagInputDTO) => {
        const search = input.search

        const tag = await this.productDatabase.getTagId(search)

        const tagId = tag.map((tag: any) => tag.id)

        const products = await this.productDatabase.findProductsByTag(tagId[0])

        const response: IGetProductsByTagOutputDTO = {
            products,
        }

        return response
    }
}
