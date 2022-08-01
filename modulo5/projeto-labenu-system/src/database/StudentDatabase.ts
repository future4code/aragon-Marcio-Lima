import { Student } from "../models/Student"
import { BaseDatabase } from "./BaseDatabase"

export class StudentDatabase extends BaseDatabase {
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

    public async createStudent(student: Student) {
        await BaseDatabase.connection(StudentDatabase.TABLE_STUDENTS).insert({
            id: student.getId(),
            name: student.getName(),
            email: student.getEmail(),
            birthdate: student.getBirthdate(),
            classroom_id: student.getClassroomId(),
        })
    }

    public async getStudentByName(search: string) {
        const result = await BaseDatabase.connection(
            StudentDatabase.TABLE_STUDENTS
        )
            .select()
            .where("name", "LIKE", `${search}`)

        return result
    }

    public async getAllStudents() {
        const result = await BaseDatabase.connection(
            StudentDatabase.TABLE_STUDENTS
        ).select()

        return result
    }

    public async editStudentClass(classroomId: string, studentId: string) {
        await BaseDatabase.connection(StudentDatabase.TABLE_STUDENTS)
            .update({ classroom_id: classroomId })
            .where({ id: studentId })
    }

    public async getStudentsByClass(classroomId: string) {
        const result = await BaseDatabase.connection(
            StudentDatabase.TABLE_STUDENTS
        )
            .select()
            .where("classroom_id", "=", `${classroomId}`)

        return result
    }
}
