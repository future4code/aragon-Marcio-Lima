import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabase } from "../../src/database/ShowDatabase"
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
})
