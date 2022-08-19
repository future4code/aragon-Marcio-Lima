import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, ITicketDB, Show } from "../../src/models/Show"
export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt(),
        }

        return showDB
    }

    public createShow = async (show: Show) => {}

    public getShows = async () => {
        const shows: IShowDB[] = [
            {
                id: "201",
                band: "Foo Fighters",
                starts_at: new Date("2022/12/05"),
            },
            {
                id: "202",
                band: "System of a Down",
                starts_at: new Date("2022/12/06"),
            },
            {
                id: "203",
                band: "Evanescence",
                starts_at: new Date("2022/12/07"),
            },
        ]

        return shows
    }

    public getTickets = async (showId: string) => {
        switch (showId) {
            case "201":
                return 2
            default:
                return 0
        }
    }

    public findShowById = async (showId: string) => {
        switch (showId) {
            case "201":
                return {
                    id: "201",
                    band: "Foo Fighters",
                    starts_at: new Date("2022/12/05"),
                }
            default:
                return undefined
        }
    }

    public findTicket = async (showId: string, userId: string) => {
        switch (showId) {
            case "201":
                return userId === "101"
                    ? ({
                          id: "301",
                          show_id: "201",
                          user_id: "101",
                      } as ITicketDB)
                    : undefined
            default:
                undefined
        }
    }

    public addTicketBooking = async (ticketDB: ITicketDB) => {}

    public removeTicketBooking = async (showId: string) => {}
}
