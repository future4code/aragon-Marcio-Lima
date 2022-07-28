import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { PingController } from "./endpoints/PingController"
import { ClassroomController } from "./endpoints/ClassroomController"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const createClassroom = new ClassroomController()

// Endpoint de teste
app.get("/ping", pingController.ping)

// Exercício 0
app.get("/classrooms", classroomController.getAllClassrooms)

// Endpoint 1. Create classroom
app.post("/classrooms", classroomController.createClassroom)
