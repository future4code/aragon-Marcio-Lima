import { Request, response, Response } from "express"
import { RecipeDatabase } from "../database/RecipeDatabase"
import { Recipe } from "../model/Recipe"
import { USER_ROLES } from "../model/User"
import { Authenticator } from "../service/Authenticator"
import { IdGenerator } from "../service/IdGenerator"

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const search = req.query.search as string
            const sort = (req.query.sort as string) || "updated_at"
            const order = (req.query.order as string) || "asc"
            const limit = Number(req.query.limit) || 10
            const page = Number(req.query.page) || 1
            const offset = limit * (page - 1)

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            if (search && typeof search !== "string") {
                throw new Error("Parâmetro 'search' deve ser uma string")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes(
                search,
                sort,
                order,
                limit,
                offset
            )

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public createRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const title = req.body.title
            const description = req.body.description

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!title && !description) {
                throw new Error("Parâmetro faltando")
            }

            if (title && typeof title !== "string") {
                throw new Error("Parâmetro 'title' deve ser uma string")
            }

            if (description && typeof description !== "string") {
                throw new Error("Parâmetro 'description' deve ser uma string")
            }

            if (title.length < 3) {
                throw new Error(
                    "O parâmetro 'title' deve possuir ao menos 3 caracteres"
                )
            }

            if (description.length < 10) {
                throw new Error(
                    "O parâmetro 'description' deve possuir ao menos 10 caracteres"
                )
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const recipe = new Recipe(
                id,
                title,
                description,
                new Date(),
                new Date(),
                payload.id
            )

            const recipeDatabase = new RecipeDatabase()
            await recipeDatabase.createRecipe(recipe)

            res.status(201).send({
                message: "Receita criada com sucesso!",
                recipe,
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id
            const title = req.body.title
            const description = req.body.description

            if (!token) {
                errorCode = 422
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            if (!title && !description) {
                throw new Error("Parâmetro faltando")
            }

            if (title && typeof title !== "string") {
                throw new Error("Parâmetro 'title' deve ser uma string")
            }

            if (description && typeof description !== "string") {
                throw new Error("Parâmetro 'description' deve ser uma string")
            }

            if (title.length < 3) {
                throw new Error(
                    "O parâmetro 'title' deve possuir ao menos 3 caracteres"
                )
            }

            if (description.length < 10) {
                throw new Error(
                    "O parâmetro 'description' deve possuir ao menos 10 caracteres"
                )
            }

            const recipeDatabase = new RecipeDatabase()
            const recipeFromDB = await recipeDatabase.findRecipeById(id)

            if (!recipeFromDB) {
                errorCode = 401
                throw new Error("O id da receita é inválido ou inexsistente")
            }

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== recipeFromDB.creator_id) {
                    errorCode = 403
                    throw new Error(
                        "Somente admins tem permissão de editar receitas de outros usuários"
                    )
                }
            }

            const recipe = new Recipe(
                recipeFromDB.id,
                recipeFromDB.title,
                recipeFromDB.description,
                recipeFromDB.created_at,
                recipeFromDB.updated_at,
                recipeFromDB.creator_id
            )

            title && recipe.setTitle(title)
            description && recipe.setDescription(description)

            await recipeDatabase.editRecipe(recipe)

            return res.status(200).send({
                message: "Edição realizada com sucesso",
                recipe,
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id

            if (!token) {
                errorCode = 422
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipeFromDB = await recipeDatabase.findRecipeById(id)

            if (!recipeFromDB) {
                errorCode = 401
                throw new Error("O id da receita é inválido ou inexsistente")
            }

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== recipeFromDB.creator_id) {
                    errorCode = 403
                    throw new Error(
                        "Somente admins tem permissão de editar receitas de outros usuários"
                    )
                }
            }

            await recipeDatabase.deleteRecipe(id)

            return res.status(200).send({
                message: "Receita deletada com sucesso!",
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}
