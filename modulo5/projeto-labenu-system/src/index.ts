import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { PingController } from "./endpoints/PingController"
import { ClassromController } from "./endpoints/ClassroomController"
import { CreateClassroomController } from "./endpoints/CreateClassroomController"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classromController = new ClassromController()
const createClassroomController = new CreateClassroomController()

// Endpoint de teste
app.get("/ping", pingController.ping)

// Exercício 0
app.get("/classrooms", classromController.getAllClassrooms)

// Endpoint 1. Create classroom
app.get("/classrooms", createClassroomController.createClassroom)
