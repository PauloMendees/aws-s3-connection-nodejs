import { UploadFileResponse } from "../lib/types";

export interface IUploadFileProvider {
    execute(fileKey: string, file: Express.Multer.File): Promise<UploadFileResponse>
    fileUrlGenerate(fileKey: string): string
}