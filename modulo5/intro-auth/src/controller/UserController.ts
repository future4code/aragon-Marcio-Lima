import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class UserController {
   public signup = async (req: Request, res: Response) => {
      let errorCode = 400
      try {
         const { nickname, email, password } = req.body

         if (!nickname || !email || !password) {
            throw new Error("Parâmetros faltando")
         }

         if (
            typeof nickname !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
         ) {
            errorCode = 400
            throw new Error(
               "Os parâmetros nickname, email e password devem ser strings."
            )
         }

         if (nickname.length < 3) {
            errorCode
            throw new Error(
               "O parâmetro nickname deve possuir mais ao menos 3 caracteres."
            )
         }

         if (password.length < 6) {
            errorCode
            throw new Error(
               "O parâmetro password deve possuir mais ao menos 3 caracteres."
            )
         }

         if (!email.includes("@") || !email.includes(".")) {
            errorCode
            throw new Error("O email fornecido não tem um formato válido.")
         }

         const idGenerator = new IdGenerator()
         const id = idGenerator.generate()

         const user = new User(id, nickname, email, password)

         const userDatabase = new UserDatabase()
         await userDatabase.createUser(user)

         const payload: ITokenPayload = {
            id: user.getId(),
         }

         const authenticator = new Authenticator()
         const token = authenticator.generateToken(payload)

         res.status(201).send({
            message: "Cadastro realizado com sucesso",
            token,
         })
      } catch (error) {
         if (
            typeof error.message === "string" &&
            error.message.includes("Entrada duplicada")
         ) {
            return res.status(400).send("Email já em uso")
         }
         res.status(errorCode).send({ message: error.message })
      }
   }

   public login = async (req: Request, res: Response) => {
      let errorCode = 400
      try {
         const { email, password } = req.body

         if (!email || !password) {
            errorCode = 401
            throw new Error("Email ou senha faltando.")
         }

         if (typeof email !== "string" || typeof password !== "string") {
            errorCode = 400
            throw new Error("Os parâmetros email e password devem ser strings.")
         }

         if (password.length < 6) {
            errorCode
            throw new Error(
               "O parâmetro password deve possuir mais ao menos 3 caracteres."
            )
         }

         if (!email.includes("@") || !email.includes(".")) {
            errorCode
            throw new Error("O email fornecido não tem um formato válido.")
         }

         const userDatabase = new UserDatabase()
         const userDB = await userDatabase.findByEmail(email)

         if (!userDB) {
            errorCode = 401
            throw new Error("Email não foi cadastrado")
         }

         const user = new User(
            userDB.id,
            userDB.nickname,
            userDB.email,
            userDB.password
         )

         if (user.getPassword() !== password) {
            errorCode = 401
            throw new Error("Senha inválida")
         }

         const payload: ITokenPayload = {
            id: user.getId(),
         }

         const authenticator = new Authenticator()
         const token = authenticator.generateToken(payload)

         res.status(200).send({
            message: "Login realizado com sucesso",
            token,
         })
      } catch (error) {
         res.status(errorCode).send({ message: error.message })
      }
   }

   public getAllUsers = async (req: Request, res: Response) => {
      let errorCode = 400
      try {
         const query = req.query.q as string
         const token = req.headers.authorization

         const authenticator = new Authenticator()
         const payload = authenticator.getTokenPayload(token)

         if (!payload) {
            errorCode = 401
            throw new Error("Token faltando ou inválido")
         }

         const userDatabase = new UserDatabase()
         const usersDB = await userDatabase.getAllUsers(query)

         const users = usersDB.map((user) => {
            return new User(user.id, user.nickname, user.email, user.password)
         })

         res.status(200).send({ users })
      } catch (error) {
         res.status(errorCode).send({ message: error.message })
      }
   }

   public updateUser = async (req: Request, res: Response) => {
      let errorCode = 400
      try {
         const { nickname, email, password } = req.body
         const token = req.headers.authorization

         const authenticator = new Authenticator()
         const payload = authenticator.getTokenPayload(token)

         if (!payload) {
            errorCode = 401
            throw new Error("Token faltando ou inválido")
         }

         const userDatabase = new UserDatabase()
         const userDB = await userDatabase.updateUser(
            payload.id,
            nickname,
            email,
            password
         )

         res.status(200).send({
            message: "Edição de usuário realizada.",
         })
      } catch (error) {
         res.status(errorCode).send({ message: error.message })
      }
   }

   public deleteUser = async (req: Request, res: Response) => {
      let errorCode = 400
      try {
         const id = req.params.id
         const token = req.headers.authorization

         const authenticator = new Authenticator()
         const payload = authenticator.getTokenPayload(token)

         if (!payload) {
            errorCode = 401
            throw new Error("Token faltando ou inválido")
         }

         if (payload.id === id) {
            errorCode = 409
            throw new Error("Um usuário logado não pode remover a si mesmo")
         }

         const userDatabase = new UserDatabase()
         const userDB = await userDatabase.deleteUser(id)

         res.status(200).send({
            message: "Usuário deletado com sucesso",
            user: userDB,
         })
      } catch (error) {
         res.status(errorCode).send({ message: error.message })
      }
   }
}
