import { Request, Response } from "express"
import { StudentDatabase } from "../database/StudentDatabase"
import { Student } from "../models/Student"

export class StudentController {
    public async createStudent(req: Request, res: Response) {
        let errorCode = 400
        try {
            const { name, email, birthdate, classroom_id } = req.body

            if (!name || !email || !birthdate || !classroom_id) {
                throw new Error("Error: Missing parameters.")
            }

            const student = new Student(
                Date.now().toString(),
                name,
                email,
                birthdate,
                classroom_id
            )

            const studentDatabase = new StudentDatabase()
            await studentDatabase.createStudent(student)

            res.status(201).send({
                message: "Student successfully created!",
                student,
            })
        } catch (error) {
            res.status(errorCode).send({
                message: error.message,
            })
        }
    }

    public async getStudentByName(req: Request, res: Response) {
        let errorCode = 400
        try {
            const search = req.query.search as string

            if (search) {
                const studentDatabase = new StudentDatabase()
                const result = await studentDatabase.getStudentByName(search)

                res.status(200).send({
                    students: result,
                })
            } else {
                const studentDatabase = new StudentDatabase()
                const result = await studentDatabase.getAllStudents()

                res.status(200).send({
                    students: result,
                })
            }
        } catch (error) {
            res.status(errorCode).send({
                message: error.message,
            })
        }
    }
}
