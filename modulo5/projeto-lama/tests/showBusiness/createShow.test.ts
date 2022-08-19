import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { ICreateShowInputDTO } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("criação de show bem sucedida", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-astrodev",
            band: "El Efecto",
            startsAt: "2022/12/08",
        }

        const response = await showBusiness.createShow(input)

        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("El Efecto")
        expect(response.message).toEqual("Show criado com sucesso")
    })

    test("retorna erro se o usuário não estiver logado", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock3",
                band: "El Efecto",
                startsAt: "2022/12/08",
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("retorna erro se um usuário normal tentar criar um show", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock",
                band: "Ska-P",
                startsAt: "2022/12/09",
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Somente admins podem criar um show")
            }
        }
    })

    test("retorna erro se o show for criado antes de 2022/12/05", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-astrodev",
                band: "Muse",
                startsAt: "2022/12/04",
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual(
                    "Calma colega admin. O LAMA começa apenas dia 5 de dezembro"
                )
            }
        }
    })

    test("retorna erro se a data estiver indisponível", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-astrodev",
                band: "Uriah Heep",
                startsAt: "2022/12/06",
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual(
                    "Só pode existir um show por dia durante o evento"
                )
            }
        }
    })
})
