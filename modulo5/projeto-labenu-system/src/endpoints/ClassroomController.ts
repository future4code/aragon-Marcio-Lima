import { Request, Response } from "express"
import { ClassroomDatabase } from "../database/ClassroomDatabase"

export class ClassromController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classromDatabase = new ClassroomDatabase()
            const result = await classromDatabase.getAllClassrooms()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}
