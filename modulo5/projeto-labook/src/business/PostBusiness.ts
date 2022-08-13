import { PostDatabase } from "../database/PostDatabase"
import {
    ICreatePostInputDTO,
    IDeletePostInputDTO,
    IDislikePostInputDTO,
    IGetPostsDBDTO,
    IGetPostsInputDTO,
    IGetPostsOutputDTO,
    IGetPostsPost,
    ILikeDB,
    ILikePostInputDTO,
    Post,
} from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ) {}

    public createPost = async (input: ICreatePostInputDTO) => {
        const token = input.token
        const content = input.content

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        if (
            !content ||
            typeof content !== "string" ||
            content.length < 1
        ) {
            throw new Error("Parâmetro 'content' inválido")
        }

        const postId = this.idGenerator.generate()
        const userId = payload.id
        const likes = 0

        const post = new Post(postId, content, userId, likes)

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso",
            post,
        }

        return response
    }

    public getPosts = async (input: IGetPostsInputDTO) => {
        const token = input.token
        const search = input.search || ""
        const order = input.order || "content"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const getPostsInputDB: IGetPostsDBDTO = {
            search,
            order,
            sort,
            limit,
            offset,
        }

        const postsDB = await this.postDatabase.getPosts(getPostsInputDB)

        const posts = postsDB.map((postDB) => {
            const post = new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
            )

            const postResponse: IGetPostsPost = {
                id: post.getId(),
                content: post.getContent(),
                user_id: post.getUserId(),
            }

            return postResponse
        })

        const response: IGetPostsOutputDTO = {
            posts,
        }

        return response
    }

    public deletePost = async (input: IDeletePostInputDTO) => {
        const token = input.token
        const idToDelete = input.idToDelete

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const isPostExists = await this.postDatabase.findPostById(
            idToDelete
        )

        if (!isPostExists) {
            throw new Error("Post não encontrado")
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (payload.id !== isPostExists.user_id) {
                throw new Error(
                    "Somente admins podem deletar de outros usuários"
                )
            }
        }

        await this.postDatabase.deletePost(idToDelete)

        const response = {
            message: "Post deletado com sucesso",
        }

        return response
    }

    public likePost = async (input: ILikePostInputDTO) => {
        const token = input.token
        const id = input.postId

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const isPostExists = await this.postDatabase.findPostById(id)

        if (!isPostExists) {
            throw new Error("Post não encontrado")
        }

        const findLikedPost = await this.postDatabase.findLikedPost(
            id,
            payload.id
        )

        if (findLikedPost) {
            throw new Error("Impossível curtir o mesmo post duas vezes")
        }

        const likeId = this.idGenerator.generate()

        const newLike: ILikeDB = {
            id: likeId,
            post_id: id,
            user_id: payload.id,
        }

        await this.postDatabase.likePost(newLike)

        const response = {
            message: "Post curtido!",
        }

        return response
    }

    public dislikePost = async (input: IDislikePostInputDTO) => {
        const token = input.token
        const id = input.postId

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const isPostExists = await this.postDatabase.findPostById(id)

        if (!isPostExists) {
            throw new Error("Post não encontrado")
        }

        const findLikedPost = await this.postDatabase.findLikedPost(
            id,
            payload.id
        )

        if (!findLikedPost) {
            throw new Error("Curtir post")
        }

        await this.postDatabase.dislikePost(id)

        const response = {
            message: "Post descurtido :(",
        }

        return response
    }
}
