import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../models/User"

export const registerUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error(
                "Error: Make sure you fill in the following parameters 'email' and 'password' correctly."
            )
        }

        if (typeof email !== "string" || typeof password !== "string") {
            errorCode = 422
            throw new Error(
                "Error: The following parameters 'email' and 'password' must be strings. "
            )
        }

        if (!email.includes("@" || ".")) {
            errorCode = 422
            throw new Error("Error: This is not a valid email. Try anothe one.")
        }

        const emailExists = await connection(TABLE_USERS)
            .select()
            .where("email", "=", `${email}`)

        if (emailExists[0]) {
            errorCode = 422
            throw new Error(
                "Error: This email is currently in use. Try another one."
            )
        }

        const newUser: User = {
            id: Date.now().toString(),
            email: email,
            password: password,
        }

        await connection(TABLE_USERS).insert({
            id: newUser.id,
            email: newUser.email,
            password: newUser.password,
        })

        res.status(201).send({
            message: "New user successfully registered!",
            user: newUser,
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
