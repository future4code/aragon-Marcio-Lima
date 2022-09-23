import { BaseError } from "./BaseError"

export class ForbiddenError extends BaseError {
    constructor(message: string = "Forbidden resource") {
        super(403, message)
    }
}
