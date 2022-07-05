import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// Exercício 1:
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Servidor funcionando!')
})

// Exercício 2:
type User = {
  id: number
  name: string
  phone: number
  email: string
}

let users: User[] = [
  {
    id: 1,
    name: 'Márcio Lima',
    phone: 53999999999,
    email: 'mvl@labenu.com',
  },
  {
    id: 2,
    name: 'Roberta Xavier',
    phone: 53123456789,
    email: 'rxg@labenu.com',
  },
  {
    id: 3,
    name: 'Betina Vignoli',
    phone: 53987654321,
    email: 'bgv@labenu.com',
  },
]

// Exercício 3:
app.get('/users/', (req: Request, res: Response) => {
  res.status(200).send(users)
})

// Exercício 4:
app.get('/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const user = users.filter((user) => user.id === id)
  res.status(200).send(user)
})

// Exercício 5:
app.put('/users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const phone = Number(req.body.id)

  const updatePhone = users.map((user) => {
    if (user.id === id) {
      return { ...user, phone: phone }
    } else return user
  })
  users = updatePhone

  const updateUsers = users.filter((user) => user.id === id)
  res
    .status(201)
    .send({ mensagem: 'Telefone alterado com sucesso!', user: updateUsers[0] })
})

// Exercício 6:
app.delete('users/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const index = users.findIndex((user) => user.id === id)
  users.splice(index, 1)
  res.status(200).send({ mensagem: 'Usuário deletado com sucesso!' })
})

app.listen(3003, () => console.log('O servidor está rodando na porta 3003.'))
