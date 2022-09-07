import { ShowDatabase } from "../database/ShowDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import {
    IAddBookingInputDTO,
    IAddBookingOutputDTO,
    ICreateShowInputDTO,
    ICreateShowOutputDTO,
    IGetShowsOutputDTO,
    IRemoveBookingInputDTO,
    IRemoveBookingOutputDTO,
    ITicketDB,
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
            throw new UnauthorizedError("Somente admins podem criar um show")
        }

        const unavailableDate = await this.showDatabase.isDateAvailable(
            new Date(startsAt)
        )

        if (new Date(startsAt) < new Date("2022/12/05")) {
            throw new RequestError(
                "Calma colega admin, segure sua empolgação. O LAMA começa apenas dia 5 de dezembro"
            )
        }

        if (new Date(startsAt) > new Date("2022/12/11")) {
            throw new RequestError(
                "Não é possível criar shows depois de 11 de dezembro"
            )
        }

        if (unavailableDate) {
            throw new RequestError(
                "Só pode existir um show por dia durante o evento"
            )
        }

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
            show.setTickets(5000 - tickets)
        }

        const response: IGetShowsOutputDTO = {
            shows,
        }

        return response
    }

    public addTicketBooking = async (input: IAddBookingInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new NotFoundError("Show não encontrado")
        }

        const ticketIsAlreadyTaken = await this.showDatabase.findTicket(
            showId,
            payload.id
        )

        if (ticketIsAlreadyTaken) {
            throw new ConflictError(
                "Você já comprou este ingresso. Uma pessoa só pode reservar um ingresso por show"
            )
        }

        const shows = await this.getShows()

        const [ticketStock] = shows.shows.filter((show: any) => {
            return show.id === showId
        })

        if (ticketStock.getTickets() < 1) {
            throw new RequestError("Ingressos esgotados")
        }

        const ticket: ITicketDB = {
            id: this.idGenerator.generate(),
            show_id: showId,
            user_id: payload.id,
        }

        await this.showDatabase.addTicketBooking(ticket)

        const response: IAddBookingOutputDTO = {
            message: "Pronto! Seu ingresso foi reservado com sucesso",
        }

        return response
    }

    public removeTicketBooking = async (input: IRemoveBookingInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new NotFoundError("Show não encontrado")
        }

        const isTicketExists = await this.showDatabase.findTicket(showId, payload.id)

        if (!isTicketExists) {
            throw new NotFoundError(
                "Não há nada para remover, você ainda não comprou seu ingresso"
            )
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (payload.id !== isTicketExists.user_id) {
                throw new UnauthorizedError(
                    "Este recurso é disponível apenas para admins"
                )
            }
        }

        await this.showDatabase.removeTicketBooking(showId)

        const response: IRemoveBookingOutputDTO = {
            message: "Reserva de ingresso removida com sucesso",
        }

        return response
    }
}
