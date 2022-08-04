import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { PingController } from "./endpoints/PingController"
import { ClassroomController } from "./endpoints/ClassroomController"
import { StudentController } from "./endpoints/StudentController"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server running on port ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const studentController = new StudentController()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.post("/classrooms", classroomController.createClassroom)
app.get("/classrooms/active", classroomController.getActiveClassrooms)
app.put("classrooms/:classroomId", classroomController.changeModuleClass)
app.post("/students", studentController.createStudent)
app.get("/students", studentController.getStudentByName)
app.put("/students/:id", studentController.editStudentClass)
app.get("/students/:classroomId", studentController.getStudentsByClass)
