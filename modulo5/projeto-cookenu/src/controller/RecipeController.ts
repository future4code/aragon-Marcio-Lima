import { Request, Response } from "express"
import { RecipeDatabase } from "../database/RecipeDatabase"
import { Recipe } from "../model/Recipe"
import { Authenticator } from "../service/Authenticator"
import { HashManager } from "../service/HashManager"
import { IdGenerator } from "../service/IdGenerator"

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const search = req.query.search
            const sort = req.query.sort || "updated_at"
            const order = req.query.order || "asc"
            const limit = Number(req.query.limit) || 5
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

            if (typeof search !== "string") {
                throw new Error("Parâmetro 'search' deve ser uma string")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes(search)

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
    /*
## Endpoint 3) Cadastro de nova receita

Desenvolva uma requisição que permite um usuário logado no sistema criar uma nova receita.
A receita criada deve ser retornada ao final da operação

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- token deve existir e representar um usuário válido.
- title e description devem ser fornecidos e serem do tipo string.
- title deve possuir ao menos 3 caracteres, enquanto description ao menos 10 caracteres.
*/
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

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
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
}
