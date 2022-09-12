import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabase } from "../../src/database/ProductDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { IPostProductInputDTO } from "../../src/models/Product"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as unknown as ProductDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("criação de produto bem sucedida", async () => {
        const input: IPostProductInputDTO = {
            token: "token-astrodev",
            name: "VESTIDO TRICOT CHEVRON",
            tag: ["101"],
        }

        const response = await productBusiness.registerProduct(input)

        expect(response.product.getId()).toEqual("id-mock")
        expect(response.product.getName()).toEqual("VESTIDO TRICOT CHEVRON")
        expect(response.message).toEqual("Product registered successfully")
    })

    // test("retorna erro se o usuário não estiver logado", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: IPostProductInputDTO = {
    //             token: "meu-token",
    //             name: "VESTIDO TRICOT CHEVRON",
    //             tag: ["101"],
    //         }

    //         await productBusiness.registerProduct(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(401)
    //             expect(error.message).toEqual("Invalid or missing token")
    //         }
    //     }
    // })

    test("retorna erro se um usuário normal tentar criar um produto", async () => {
        expect.assertions(2)

        try {
            const input: IPostProductInputDTO = {
                token: "token-mock",
                name: "VESTIDO TRICOT CHEVRON",
                tag: ["101"],
            }

            await productBusiness.registerProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(403)
                expect(error.message).toEqual("Only admins can register products")
            }
        }
    })

    // test("retorna erro o produto tive um valor inválido", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: IPostProductInputDTO = {
    //             token: "token-Astrodev",
    //             name: "",
    //             tag: ["101"],
    //         }

    //         await productBusiness.registerProduct(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(404)
    //             expect(error.message).toEqual("Missing parameters")
    //         }
    //     }
    // })

    // test("retorna erro se o nome não for uma string", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: IPostProductInputDTO = {
    //             token: "token-mock",
    //             name: "",
    //             tag: ["101"],
    //         }

    //         await productBusiness.registerProduct(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(400)
    //             expect(error.message).toEqual("Invalid parameter")
    //         }
    //     }
    // })

    // test("retorna erro se o nome do produto tiver menos de 3 caracteres", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: IPostProductInputDTO = {
    //             token: "token-mock",
    //             name: "VE",
    //             tag: ["101"],
    //         }

    //         await productBusiness.registerProduct(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(400)
    //             expect(error.message).toEqual(
    //                 "Product name must be at least 3 characters"
    //             )
    //         }
    //     }
    // })
})
