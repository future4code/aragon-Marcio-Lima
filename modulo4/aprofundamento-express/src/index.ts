import express, { Request, Response } from 'express'
import cors from 'cors'
import { ToDo, toDos } from './toDos'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log('Server running on port 3003.')
})

// Exercício 1:
app.get('/ping', (req: Request, res: Response) => {
    res.send({ mensage: "Pong" })
})

// Exercício 3:
app.get('/todos/:userId', (req: Request, res: Response) => {
    const userId = Number(req.params.userId)

    const resultado = toDos.filter((toDo) => {
        return toDo.userId === userId
    })
    res.send({
        userId: userId,
        todos: resultado
    })
})

// Exercício 4:
app.post('/todos', (req: Request, res: Response) => {
    const { userId, title } = req.body

    const lastTodo = toDos[toDos.length - 1]

    const newTodo: ToDo = {
        userId: userId,
        id: lastTodo.id + 1,
        title: title,
        completed: false
    }

    toDos.push(newTodo)

    res.send({
        message: "To do successfully added!",
        todo: newTodo
    })
})

// Exercício 5:
app.put('/todos/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { completed } = req.body

    const result = toDos.map((toDo) => {
        if (toDo.id === id) {
            return { ...toDo, completed: completed }
        }
    })

    res.send({
        message: "To do status updated!",
        toDos: result
    })
})

// Exercício 6:
app.delete('/todos/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = toDos.findIndex((toDo) => {
        return toDo.id === id
    })

    if (index === - 1) {
        return res.send({
            message: "To do not found!",
            id: id
        })
    }

    toDos.splice(index, 1)

    res.send({
        message: "To do successfully deleted!",
        toDos: toDos
    })
})

/*Construa um endpoint que retorne a lista de afazeres, a depender do status de cada afazer. De maneira geral, o endpoint poderá:

- Retornar apenas os afazeres concluídos;
- Retornar apenas os afazeres incompletos;
- Retornar todos os afazeres listados, independente do status.

Entradas → Valor de status(opcional) para a propriedade “completed”.

Saídas → Lista dos afazeres selecionados por seu status ou todos os afazeres caso não a query não seja enviada.

Dicas:

- Utilize uma query params para receber o valor do status.
- Queries são informações opcionais num endpoint.
Você pode utilizar este fato para retornar todos os afazeres listados, caso o status não seja enviado na requisição.*/

// Exercício 7:
app.get('/todos', (req: Request, res: Response) => {
    const search = req.query.search

    if (search !== 'true' && search !== 'false') {
        return res.send({
            search: search,
            toDos: toDos
        })
    }

    if (search === 'true') {
        const result = toDos.filter((toDo) => {
            return toDo.completed === true
        })

        return res.send({
            search: search,
            toDos: result
        })
    } else {
        const result = toDos.filter((toDo) => {
            return toDo.completed === false
        })

        return res.send({
            search: search,
            toDos: result
        })
    }
})
