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

    public async createClassroom(classroom: Classroom) {
        await BaseDatabase.connection(
            ClassroomDatabase.TABLE_CLASSROOMS
        ).insert({
            id: classroom.getId(),
            name: classroom.getName(),
            module: classroom.getModule(),
        })
    }

    public async getActiveClass() {}
}
