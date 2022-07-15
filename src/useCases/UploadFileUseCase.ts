import { UploadFileProvider } from "../providers/AWS/implementations/UploadFileProvider";
import { ExceptionProvider } from "../providers/Exception/implementation/ExceptionProvider";
import { FileProvider } from "../providers/File/implementation/FileProvider";
import { UploadFileUseCaseResponse } from "./types";

export class UploadFileUseCase {
    constructor(
        private uploadFileProvider: UploadFileProvider,
        private fileProvider: FileProvider
    ){}

    async execute(fileKey: string, file: Express.Multer.File): Promise<UploadFileUseCaseResponse>{
        try {
            const isAcceptExtension = this.fileProvider.extensionValidate(["jpeg", "jpg", "png"], file)
            const isAcceptSize = this.fileProvider.sizeFileValidate(file, 5000000)
    
            if(!isAcceptExtension) throw new ExceptionProvider({ status: 406, message: "Nova imagem deve ser no formato PNG ou JPG / JPEG!." })
            if(!isAcceptSize) throw new ExceptionProvider({ status: 406, message: "Nova imagem excede o tamanho permitido! ( 5mb )" })

            const uploadResponse = await this.uploadFileProvider.execute(fileKey, file);

            return {
                data: uploadResponse,
                message: uploadResponse.message,
                status: 200
            }
        } catch (error) {
            throw new ExceptionProvider({ status: 500, message: "Internal error." })
        }
    }
}