import { IGetPostsDBDTO, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
        }

        await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(
            postDB
        )
    }

    public getPosts = async (input: IGetPostsDBDTO) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const result: IPostDB[] = await BaseDatabase.connection(
            PostDatabase.TABLE_POSTS
        )
            .select()
            .where("content", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return result
    }

    public findPostById = async (id: string) => {
        const result: IPostDB[] = await BaseDatabase.connection(
            PostDatabase.TABLE_POSTS
        )
            .select()
            .where({ id })

        return result[0]
    }

    public deletePost = async (id: string) => {
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id })
    }
}
