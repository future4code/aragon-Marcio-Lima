export interface IProductDB {
    id: string
    name: string
}

export interface ITagDB {
    id: string
    tag: string
}

export interface IProductTagsDB {
    id: string
    product_id: string
    tag_id: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tag: string[] = []
    ) {}

    public getId = () => this.id
    public getName = () => this.name
    public getTags = () => this.tag

    public setId = (newId: string) => (this.id = newId)
    public setName = (newName: string) => (this.name = newName)
    public setTags = (newTag: string[]) => (this.tag = newTag)
}

export interface IPostProductInputDTO {
    token: string
    name: string
    tag: string[]
}

export interface IPostProductOutputDTO {
    message: string
    product: Product
}

export interface IGetProductsInputDTO {
    search: string
}

export interface IGetProductsOutputDTO {
    products: Product[]
}

export interface IGetProductsByIdInputDTO {
    productId: string
}

export interface IGetProductsByTagInputDTO {
    search: string
}

export interface IGetProductsByTagOutputDTO {
    products: IProductDB[]
}
