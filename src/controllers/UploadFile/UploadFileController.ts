import { Request, Response } from 'express'
import { UploadFileUseCase } from '../../useCases/uploadFileUseCase';

export class UploadFileController {
    constructor(
        private uploadFileUseCase: UploadFileUseCase
    ){}
    async handle(req: Request, res: Response) {
        const file = req.file;
        const { fileKey } = req.params
        try {
            if(!file) return res.status(406).json({
                type: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/406",
                title: "Nova imagem não informada!",
                status: 406,
                detail: "Não foi encontrado nenhum arquivo no corpo da requisição, ou o arquivo não foi reconhecido."
              })

              const uploadRes = await this.uploadFileUseCase.execute(fileKey, file);
              return res.status(uploadRes.status).json({
                error: false,
                data: uploadRes,
                message: "Upload success."
              })
        } catch (e: any) {
            const log =  e.userException()

            res.status(log.status).json({
                error: log.message || 'Unexpected error.'
            })
        }
    }
}