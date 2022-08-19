import { IShowDB, ITicketDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt(),
        }

        return showDB
    }

    public createShow = async (show: Show) => {
        const showDB = this.toShowDBModel(show)
        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS).insert(showDB)
    }

    public isDateAvailable = async (date: Date) => {
        const availableDate: IShowDB[] = await BaseDatabase.connection(
            ShowDatabase.TABLE_SHOWS
        )
            .select()
            .where({ starts_at: date })

        return availableDate[0]
    }

    public getShows = async () => {
        const showsDB: IShowDB[] = await BaseDatabase.connection(
            ShowDatabase.TABLE_SHOWS
        ).select()

        return showsDB
    }

    public getTickets = async (showId: string) => {
        const result = await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .count("id AS tickets")
            .where({ show_id: showId })

        return result[0].tickets as number
    }

    public findShowById = async (showId: string) => {
        const showsDB: IShowDB[] = await BaseDatabase.connection(
            ShowDatabase.TABLE_SHOWS
        )
            .select()
            .where({ id: showId })

        return showsDB[0]
    }

    public findTicket = async (showId: string, userId: string) => {
        const ticketsDB: ITicketDB[] = await BaseDatabase.connection(
            ShowDatabase.TABLE_TICKETS
        )
            .select()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })

        return ticketsDB[0]
    }

    public addTicketBooking = async (ticketDB: ITicketDB) => {
        await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS).insert(ticketDB)
    }

    public removeTicketBooking = async (showId: string) => {
        await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
            .delete()
            .where({ show_id: showId })
    }
}
