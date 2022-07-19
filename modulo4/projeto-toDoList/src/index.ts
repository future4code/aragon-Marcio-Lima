import express, { Request, Response } from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/endpoint1";
import { getTasks } from "./endpoints/endpoint2";
import { getResponsibles } from "./endpoints/endpoint3";
import { addResponsibleUsers } from "./endpoints/endpoint4";
import { updateTaskStatus } from "./endpoints/endpoint6";
import { updateNickname } from "./endpoints/endpoint5";
import { deleteTask } from "./endpoints/endpoint7";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping);

// Endpoint 1 - usado para pegar lista de usuários (com ou sem busca).
app.get("/users", getUsers);

// Endpoint 2 - usado para pegar lista de tarefas (com ou sem busca).
app.get("/tasks", getTasks);

// Endpoint 3 - usado para pegar lista de usuários de uma dada tarefa.
app.get("/tasks/:taskId/users", getResponsibles);

// Endpoint 4 - usado para adicionar um usuário a uma tarefa.
app.post("/tasks/:taskId/users", addResponsibleUsers);

// Endpoint 5 - usado para editar o apelido de um usuário.
app.put("/users/:userId", updateNickname);

// Endpoint 6 - usado para editar o status de uma tarefa.
app.put("/tasks/:taskId", updateTaskStatus);

// Endpoint 7 - usado para deletar uma tarefa.
app.delete("/tasks/:taskId", deleteTask);
