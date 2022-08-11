import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { ICreatePostInputDTO } from "../models/Post"

export class PostController {
    constructor(private postBusiness: PostBusiness) {}

    public createPost = async (req: Request, res: Response) => {
        try {
            const input: ICreatePostInputDTO = {
                token: req.headers.authorization,
                content: req.body.content,
                userId: req.params.userId,
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}
