import { Request, Response } from "express"
import { ClassroomDatabase } from "../database/ClassroomDatabase"
import { Classroom } from "../models/Classroom"

export class CreateClassroomController {
    public async createClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
            const { name, students, module } = req.body

            if (!name || !students || !module) {
                throw new Error("Error: Invalid body.")
            }

            const classroom = new Classroom(
                Date.now().toString(),
                name,
                students,
                module
            )

            const classromDatabase = new ClassroomDatabase()
            await classromDatabase.createClassroom(classroom)

            res.status(201).send({
                message: "Classroom susscessfully created!",
                classroom: classroom,
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}
