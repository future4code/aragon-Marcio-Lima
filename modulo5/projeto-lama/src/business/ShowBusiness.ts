import { tickets } from "../database/migrations/data"
import { ShowDatabase } from "../database/ShowDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import {
    ICreateShowInputDTO,
    ICreateShowOutputDTO,
    IGetShowsInputDTO,
    IGetShowsOutputDTO,
    Show,
} from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) => {
        const { token, band, startsAt } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new UnauthorizedError(
                "Somente admins podem criar um show"
            )
        }

        if (typeof band !== "string") {
            throw new RequestError("O nome da banda deve ser string")
        }

        if (band.length < 1) {
            throw new RequestError(
                "Nome da banda deve ter mais de 1 caractere"
            )
        }

        // - a data do show não pode ser anterior ao início do festival (5 de dezembro)
        // - só pode existir um show por dia durante o evento

        const id = this.idGenerator.generate()

        const show = new Show(id, band, new Date(startsAt))

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso",
            show,
        }

        return response
    }

    public getShows = async () => {
        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map((showDB) => {
            return new Show(showDB.id, showDB.band, showDB.starts_at)
        })

        for (let show of shows) {
            const showId = show.getId()
            const tickets: any = await this.showDatabase.getTickets(showId)
            show.setTickets(tickets)
        }

        const response: IGetShowsOutputDTO = {
            shows,
        }

        return response
    }
}
