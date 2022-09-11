import { IUserDB, User, USER_ROLES } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Amaro_Users"

    public toUserDBModel = (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole(),
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        switch (email) {
            case "astrodev@gmail.com":
                return {
                    id: "101",
                    name: "Astrodev",
                    email: "astrodev@gmail.com",
                    password:
                        "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
                    role: USER_ROLES.ADMIN,
                }
            case "fulano@gmail.com":
                return {
                    id: "102",
                    name: "Fulano",
                    email: "fulano@gmail.com",
                    password:
                        "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
                    role: USER_ROLES.NORMAL,
                }
            case "ciclana@gmail.com":
                return {
                    id: "103",
                    name: "Ciclana",
                    email: "ciclana@gmail.com",
                    password:
                        "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
                    role: USER_ROLES.NORMAL,
                } as IUserDB
            default:
                return undefined
        }
    }

    public createUser = async (user: User) => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB)
    }
}
