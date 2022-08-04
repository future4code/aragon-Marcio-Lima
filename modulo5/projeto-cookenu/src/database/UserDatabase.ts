import { IUserDB, User } from "../model/User"
import { BaseDatabase } from "./BaseDatabase"
import { RecipeDatabase } from "./RecipeDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Cookenu_Users"

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            nickname: user.getNickname(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole(),
        }

        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB)
    }

    public findByEmail = async (email: string) => {
        const result: IUserDB[] = await BaseDatabase.connection(
            UserDatabase.TABLE_USERS
        )
            .select()
            .where({ email })

        return result[0]
    }

    public checkIfExistsById = async (id: string) => {
        const result: IUserDB[] = await BaseDatabase.connection(
            UserDatabase.TABLE_USERS
        )
            .select()
            .where({ id })

        return result[0] ? true : false
    }

    public getAllUsers = async (search: string | undefined) => {
        let usersDB: IUserDB[] = []

        if (search) {
            usersDB = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
                .select()
                .where("nickname", "LIKE", `%${search}%`)
        } else {
            usersDB = await BaseDatabase.connection(
                UserDatabase.TABLE_USERS
            ).select()
        }

        return usersDB
    }

    public deleteUser = async (id: string) => {
        await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
            .delete()
            .where({ creator_id: id })

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id })
    }
}
