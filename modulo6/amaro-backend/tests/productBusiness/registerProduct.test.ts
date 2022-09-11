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

    // test("criação de show bem sucedida", async () => {
    //     const input: IPostProductInputDTO = {
    //         token: "token-astrodev",
    //         name: "Astrodev",
    //         tag: ["101"],
    //     }

    //     const response = await ProductBusiness.registerProduct(input)

    //     expect(response.product.getId()).toEqual("id-mock")
    //     expect(response.show.getBand()).toEqual("El Efecto")
    //     expect(response.message).toEqual("Show criado com sucesso")
    // })

    // test("retorna erro se o usuário não estiver logado", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: ICreateShowInputDTO = {
    //             token: "token-mock3",
    //             band: "El Efecto",
    //             startsAt: "2022/12/08",
    //         }

    //         await showBusiness.createShow(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(401)
    //             expect(error.message).toEqual("Não autenticado")
    //         }
    //     }
    // })

    // test("retorna erro se um usuário normal tentar criar um show", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: ICreateShowInputDTO = {
    //             token: "token-mock",
    //             band: "Ska-P",
    //             startsAt: "2022/12/09",
    //         }

    //         await showBusiness.createShow(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(401)
    //             expect(error.message).toEqual("Somente admins podem criar um show")
    //         }
    //     }
    // })

    // test("retorna erro se o show for criado antes de 2022/12/05", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: ICreateShowInputDTO = {
    //             token: "token-astrodev",
    //             band: "Muse",
    //             startsAt: "2022/12/04",
    //         }

    //         await showBusiness.createShow(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(400)
    //             expect(error.message).toEqual(
    //                 "Calma colega admin, segure sua empolgação. O LAMA começa apenas dia 5 de dezembro"
    //             )
    //         }
    //     }
    // })

    // test("retorna erro se o show for criado depois de 2022/12/11", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: ICreateShowInputDTO = {
    //             token: "token-astrodev",
    //             band: "Muse",
    //             startsAt: "2022/12/12",
    //         }

    //         await showBusiness.createShow(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(400)
    //             expect(error.message).toEqual(
    //                 "Não é possível criar shows depois de 11 de dezembro"
    //             )
    //         }
    //     }
    // })

    // test("retorna erro se a data estiver indisponível", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: ICreateShowInputDTO = {
    //             token: "token-astrodev",
    //             band: "Uriah Heep",
    //             startsAt: "2022/12/05",
    //         }

    //         await showBusiness.createShow(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(400)
    //             expect(error.message).toEqual(
    //                 "Só pode existir um show por dia durante o evento"
    //             )
    //         }
    //     }
    // })
})
