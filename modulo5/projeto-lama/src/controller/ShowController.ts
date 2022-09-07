import { Request, Response } from "express"
import { ShowBusiness } from "../business/ShowBusiness"
import { BaseError } from "../errors/BaseError"
import {
    IAddBookingInputDTO,
    ICreateShowInputDTO,
    IRemoveBookingInputDTO,
} from "../models/Show"

export class ShowController {
    constructor(private showBusiness: ShowBusiness) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization,
                band: req.body.band,
                startsAt: req.body.startsAt,
            }

            const response = await this.showBusiness.createShow(input)

            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({
                message: "Erro inesperado ao criar show",
            })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        try {
            const response = await this.showBusiness.getShows()

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({
                message: "Erro inesperado ao buscar shows",
            })
        }
    }

    public addTicketBooking = async (req: Request, res: Response) => {
        try {
            const input: IAddBookingInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id,
            }

            const response = await this.showBusiness.addTicketBooking(input)

            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({
                message: "Erro inesperado ao reservar ingressos",
            })
        }
    }

    public removeTicketBooking = async (req: Request, res: Response) => {
        try {
            const input: IRemoveBookingInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id,
            }

            const response = await this.showBusiness.removeTicketBooking(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({
                message: "Erro inesperado ao remover reserva de ingressos",
            })
        }
    }
}
