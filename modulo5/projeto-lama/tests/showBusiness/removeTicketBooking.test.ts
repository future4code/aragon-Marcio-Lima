import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { IRemoveBookingInputDTO } from "../../src/models/Show"
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

    test("remoção de reserva de ingresso bem sucedida", async () => {
        const input: IRemoveBookingInputDTO = {
            token: "token-astrodev",
            showId: "201",
        }

        const response = await showBusiness.removeTicketBooking(input)

        expect(response.message).toEqual("Reserva de ingresso removida com sucesso")
    })

    test("retorna erro se o usuário não estiver logado", async () => {
        expect.assertions(2)

        try {
            const input: IRemoveBookingInputDTO = {
                token: "token-mock3",
                showId: "201",
            }

            await showBusiness.removeTicketBooking(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("retorna erro se show não for encontrado", async () => {
        expect.assertions(2)

        try {
            const input: IRemoveBookingInputDTO = {
                token: "token-mock",
                showId: "500",
            }

            await showBusiness.removeTicketBooking(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Show não encontrado")
            }
        }
    })

    test("retorna erro se ainda não tiver feito nenhuma reserva", async () => {
        expect.assertions(2)

        try {
            const input: IRemoveBookingInputDTO = {
                token: "token-mock",
                showId: "201",
            }

            await showBusiness.removeTicketBooking(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual(
                    "Não há nada para remover, você ainda não comprou seu ingresso"
                )
            }
        }
    })

    // test("retorna erro se um usuário normal tentar remover um ingresso que não é seu", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input = {
    //             token: undefined,
    //             showId: "205",
    //         } as unknown as IRemoveBookingInputDTO

    //         await showBusiness.removeTicketBooking(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(401)
    //             expect(error.message).toEqual(
    //                 "Este recurso é disponível apenas para admins"
    //             )
    //         }
    //     }
    // })
})
