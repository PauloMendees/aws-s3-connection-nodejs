import { DownloadFileUseCase } from "../../useCases/DownloadFileUseCase";
import { Request, Response } from 'express'

export class DownloadFileController {
    constructor(
        private downloadFileUseCase: DownloadFileUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const { fileKey } = req.params
            const fileStream = await this.downloadFileUseCase.execute(fileKey, 'pdf');
            res.attachment(fileKey)
            fileStream.pipe(res)
        } catch (e) {
            const log =  e.userException()
            res.status(log.status).json({
                error: log.message || 'Unexpected error.'
            })
        }
    }
}