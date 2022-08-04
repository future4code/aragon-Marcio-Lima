import { Request, Response } from "express"
import { StudentDatabase } from "../database/StudentDatabase"
import { Student } from "../models/Student"

export class StudentController {
    public async createStudent(req: Request, res: Response) {
        let errorCode = 400
        try {
            const { name, email, birthdate, classroom_id } = req.body

            if (!name || !email || !birthdate || !classroom_id) {
                errorCode = 400
                throw new Error("Error: Missing parameters.")
            }

            if (
                typeof name !== "string" ||
                typeof email !== "string" ||
                typeof classroom_id !== "string"
            ) {
                errorCode = 400
                throw new Error(
                    "Error: The following parameters: name, email and classroom_id me bu strings."
                )
            }

            if (!email.includes("@" || ".")) {
                errorCode = 422
                throw new Error(
                    "Error: This is not a valid email. Try anothe one."
                )
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
            const search = req.query.q as string

            if (search) {
                const studentDatabase = new StudentDatabase()
                const result = await studentDatabase.getStudentByName(search)

                res.status(200).send({
                    result,
                })
            }

            const studentDatabase = new StudentDatabase()
            const result = await studentDatabase.getAllStudents()

            res.status(200).send({
                result,
            })
        } catch (error) {
            res.status(errorCode).send({
                message: error.message,
            })
        }
    }

    public async editStudentClass(req: Request, res: Response) {
        let errorCode = 400
        try {
            const studentId = req.params.id
            const classroomId = req.body.classroomId

            if (!classroomId || !studentId) {
                errorCode = 400
                throw new Error("Error: Missing parameters.")
            }

            if (
                typeof classroomId !== "string" ||
                typeof studentId !== "string"
            ) {
                errorCode = 400
                throw new Error(
                    "Error: Classroom id and student id must be strings."
                )
            }

            const studentDatabase = new StudentDatabase()
            await studentDatabase.editStudentClass(classroomId, studentId)

            res.status(200).send({
                message: "The student has been enrolled in a new class!",
            })
        } catch (error) {
            res.status(errorCode).send({
                message: error.message,
            })
        }
    }

    public async getStudentsByClass(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomId = req.params.classroomId

            const studentDatabase = new StudentDatabase()
            const result = await studentDatabase.getStudentsByClass(classroomId)

            res.status(200).send({
                students: result,
            })
        } catch (error) {
            res.status(errorCode).send({
                message: error.message,
            })
        }
    }
}
