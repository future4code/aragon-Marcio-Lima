import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IProductDB, ITagDB, Product } from "../../src/models/Product"

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_PRODUCT_TAGS = "Amaro_Product_Tags"

    public toProductDBModel = (product: Product) => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
        }

        return productDB
    }

    public registerProduct = async (product: Product) => {}

    public getProducts = async () => {
        const products: IProductDB[] = [
            {
                id: "8371",
                name: "VESTIDO TRICOT CHEVRON",
            },
            {
                id: "8367",
                name: "VESTIDO MOLETOM COM CAPUZ MESCLA",
            },
            {
                id: "8363",
                name: "VESTIDO CURTO MANGA LONGA LUREX",
            },
        ]

        return products
    }

    public getProductsById = async (productId: string) => {
        switch (productId) {
            case "8371":
                return { id: "8371", name: "VESTIDO TRICOT CHEVRON" }
            default:
                return undefined
        }
    }

    public searchProductsByName = async (q: string) => {
        // switch (q) {
        //     case "VESTIDO TRICOT CHEVRON":
        //         return
        //     default:
        //         return undefined
        // }
    }

    public getTagId = async (id: string) => {}

    public findProductsByTag = async (q: string) => {}

    public getTags = async (productId: string) => {}
}
