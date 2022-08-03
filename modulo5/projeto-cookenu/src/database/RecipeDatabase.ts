import { IRecipeDB, Recipe } from "../model/Recipe"
import { BaseDatabase } from "./BaseDatabase"

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public getAllRecipes = async (search: string | undefined) => {
        let recipesDB: IRecipeDB[] = []

        if (search) {
            recipesDB = await BaseDatabase.connection(
                RecipeDatabase.TABLE_RECIPES
            )
                .select()
                .where("title", "LIKE", `%${search}%`)
        } else {
            recipesDB = await BaseDatabase.connection(
                RecipeDatabase.TABLE_RECIPES
            ).select()
        }

        return recipesDB
    }

    public createRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: recipe.getCreatorId(),
        }

        await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES).insert(
            recipeDB
        )
    }
}
