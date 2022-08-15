import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabase } from "../../src/database/PostDatabase"
import { ICreatePostInputDTO } from "../../src/models/Post"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("criação de post bem sucedida", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock",
            content: "create-test",
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toEqual("Post criado com sucesso")
        expect(response.post.getContent()).toEqual("create-test")
    })
})
