import { Request, Response } from 'express'
import { DeleteFileUseCase } from '../../useCases/deleteFileUseCase'

export class DeleteFileController {
    constructor(
        private deleteFileProvider: DeleteFileUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const { fileKey } = req.params

            await this.deleteFileProvider.execute(fileKey);

            return res.status(200).json({
                error: false,
                data: [],
                message: "Delete success."
            })
        } catch (e) {
            const log =  e.userException()

            res.status(log.status).json({
                error: log.message || 'Unexpected error.'
            })
        }
    }
}