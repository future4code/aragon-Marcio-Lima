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
                throw new Error("Error: Missing parameters.")
            }

            if (module > 6) {
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

    public async getActiveClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const list = await classroomDatabase.getAllClassrooms()

            const result = list.filter((item) => {
                return item.module !== "0"
            })

            if (result.length === 0) {
                errorCode = 404
                throw new Error("Erro: There are no active classes.")
            }

            res.status(200).send({ activeClasses: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async changeModuleClass(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomId = req.params.classroomId
            const module = req.body.module

            if (!classroomId || !module) {
                errorCode = 400
                throw new Error("Error: Missing parameters.")
            }

            if (typeof classroomId !== "string" || typeof module !== "string") {
                errorCode = 400
                throw new Error(
                    "Error: Classroom id and module must be strings."
                )
            }

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.changeModuleClass(classroomId, module)

            res.status(200).send({
                message: "Class module successfully changed!",
            })
        } catch (error) {
            res.status(errorCode).send({
                message: error.message,
            })
        }
    }
}
