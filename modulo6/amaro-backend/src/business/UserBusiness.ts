import { UserDatabase } from "../database/UserDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import {
    ILoginInputDTO,
    ILoginOutputDTO,
    ISignupInputDTO,
    ISignupOutputDTO,
    User,
    USER_ROLES,
} from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: ISignupInputDTO) => {
        const { name, email, password } = input

        if (typeof name !== "string") {
            throw new RequestError("Invalid parameter")
        }

        if (typeof email !== "string") {
            throw new RequestError("Invalid e-mail")
        }

        if (typeof password !== "string") {
            throw new RequestError("Invalid password")
        }

        if (name.length < 3) {
            throw new RequestError("Name must contain at least 3 characters")
        }

        if (password.length < 6) {
            throw new RequestError("Password must contain at least 6 characters")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new RequestError("E-mail must be a valid e-mail address")
        }

        const isEmailAlreadyExists = await this.userDatabase.findByEmail(email)

        if (isEmailAlreadyExists) {
            throw new ConflictError("E-mail already registered")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(id, name, email, hashedPassword, USER_ROLES.NORMAL)

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole(),
        }

        const token = this.authenticator.generateToken(payload)

        const response: ISignupOutputDTO = {
            message: "Successfully signup",
            token,
        }

        return response
    }

    public login = async (input: ILoginInputDTO) => {
        const { email, password } = input

        if (typeof email !== "string") {
            throw new RequestError("Invalid e-mail")
        }

        if (typeof password !== "string") {
            throw new RequestError("Invalid password")
        }

        if (password.length < 6) {
            throw new RequestError("Password must contain at least 6 characters")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new RequestError("E-mail must be a valid e-mail address")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (!userDB) {
            throw new NotFoundError("E-mail not found")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(
            password,
            user.getPassword()
        )

        if (!isPasswordCorrect) {
            throw new UnauthorizedError("Incorrect password")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole(),
        }

        const token = this.authenticator.generateToken(payload)

        const response: ILoginOutputDTO = {
            message: "Successfully login",
            token,
        }

        return response
    }
}
