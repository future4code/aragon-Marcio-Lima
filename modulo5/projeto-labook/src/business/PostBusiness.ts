import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, Post } from "../models/Post"
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
        const userId = input.userId

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        if (content.length < 1) {
            throw new Error(
                "O conteúdo do post deve ter pelo menos 1 caractere"
            )
        }

        const postId = this.idGenerator.generate()

        const post = new Post(postId, content, userId)

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso",
        }

        return response
    }
}
