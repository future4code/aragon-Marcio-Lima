import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { ISignupInputDTO } from "../../src/models/User"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "Marcio",
            email: "marcio@gmail.com",
            password: "123456",
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Successfully signup")
        expect(response.token).toEqual("token-mock")
    })

    test("retorna erro caso o nome não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: 111,
                email: "marcio@gmail.com",
                password: "123456",
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid parameter")
            }
        }
    })

    test("retorna erro caso o email não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "Marcio",
                email: undefined,
                password: "123456",
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
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
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid password")
            }
        }
    })

    test("retorna erro se o nome tiver menos de 3 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "Ma",
                email: "marcio@gmail.com",
                password: "123456",
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual(
                    "Name must contain at least 3 characters"
                )
            }
        }
    })

    test("retorna erro se a senha tiver menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "Marcio",
                email: "marcio@gmail.com",
                password: "12345",
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual(
                    "Password must contain at least 6 characters"
                )
            }
        }
    })

    test("retorna erro se o email não tiver um email válido", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "Marcio",
                email: "marciogmail.com",
                password: "123456",
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual(
                    "E-mail must be a valid e-mail address"
                )
            }
        }
    })

    test("retorna erro se o email já estiver cadastrado", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "Astrodev",
                email: "astrodev@gmail.com",
                password: "bananinha",
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("E-mail already registered")
            }
        }
    })
})
