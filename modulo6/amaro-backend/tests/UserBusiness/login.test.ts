import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ILoginInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("login bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha",
        }

        const response = await userBusiness.login(input)

        expect(response.message).toEqual("Successfully login")
        expect(response.token).toEqual("token-astrodev")
    })

    test("retorna erro caso o email não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "Marcio",
                email: undefined,
                password: "123456",
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid e-mail")
            }
        }
    })

    test("retorna erro caso a senha não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "Marcio",
                email: "marcio@gmail.com",
                password: null,
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid password")
            }
        }
    })

    test("retorna erro se a senha tiver menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "marcio@gmail.com",
                password: "12345",
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual(
                    "Password must contain at least 6 characters"
                )
            }
        }
    })

    test("retorna erro se o email não tiver um formato válido", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "marciogmail.com",
                password: "123456",
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual(
                    "E-mail must be a valid e-mail address"
                )
            }
        }
    })

    test("retorna erro se o email não estiver cadastrado", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "marcio@gmail.com",
                password: "123456",
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("E-mail not found")
            }
        }
    })

    test("retorna erro se a senha não coincidir com a senha cadastrada", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "Bananinha",
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Incorrect password")
            }
        }
    })
})
