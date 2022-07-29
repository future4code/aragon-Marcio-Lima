import { Classroom } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms() {
        const result = await BaseDatabase.connection(
            ClassroomDatabase.TABLE_CLASSROOMS
        ).select()

        return result
    }

    public async getActiveClassrooms(name: string, module: string) {
        const result = await BaseDatabase.connection(
            ClassroomDatabase.TABLE_CLASSROOMS
        ).select(name, module)

        return result
    }

    public async createClassroom(classroom: Classroom) {
        await BaseDatabase.connection(
            ClassroomDatabase.TABLE_CLASSROOMS
        ).insert({
            id: classroom.getId(),
            name: classroom.getName(),
            module: classroom.getModule(),
        })
    }

    public async updateModule(classroomId: string, module: string) {
        await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .where(classroomId)
            .update(module)
    }
}
