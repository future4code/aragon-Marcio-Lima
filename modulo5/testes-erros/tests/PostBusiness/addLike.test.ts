import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IAddLikeInputDTO } from "../../src/models/Post"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("deve retornar erro caso o token for inválido", async () => {
        expect.assertions(2)

        try {
            const input: IAddLikeInputDTO = {
                token: "",
                postId: "201",
            }

            await postBusiness.addLike(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("deve retornar erro caso o post já tenha sido curtido", async () => {
        expect.assertions(2)

        try {
            const input: IAddLikeInputDTO = {
                token: "token-astrodev",
                postId: "201",
            }

            await postBusiness.addLike(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("Já deu like")
            }
        }
    })
})
