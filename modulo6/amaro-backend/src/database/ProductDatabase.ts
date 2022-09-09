import { IProductDB, ITagDB, Product } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
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

    public registerProduct = async (product: Product) => {
        const productDB = this.toProductDBModel(product)
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(
            productDB
        )
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT_TAGS)
    }

    public getProducts = async () => {
        const productsDB: IProductDB[] = await BaseDatabase.connection(
            ProductDatabase.TABLE_PRODUCTS
        ).select()

        return productsDB
    }
    //criar getTags por name
    public getTagsByName = async (tag: string) => {
        const tagsDB: ITagDB[] = await BaseDatabase.connection(
            ProductDatabase.TABLE_TAGS
        )
            .select()
            .where({ tag })

        return tagsDB
    }

    public getTags = async (productId: string) => {
        const result: any[] = await BaseDatabase.connection(
            ProductDatabase.TABLE_TAGS
        )
            .select()
            .where({ id: productId })

        return result[0]
    }
}
