import { Request, Response } from "express"
import { ClassroomDatabase } from "../database/ClassroomDatabase"
import { Classroom } from "../models/Classroom"

export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getAllClassrooms()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
            const { name, module } = req.body

            if (!name || !module) {
                throw new Error("Error: Invalid body.")
            }

            if (module === "7") {
                throw new Error(
                    "Error: You must to choose a number between 0 and 6"
                )
            }

            const classroom = new Classroom(Date.now().toString(), name, module)

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.createClassroom(classroom)

            res.status(201).send({
                message: "Classroom susscessfully created!",
                classroom,
            })
        } catch (error) {
            res.status(errorCode).send({
                message: error.message,
            })
        }
    }

    public async getActiveClass(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getActiveClass()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}
