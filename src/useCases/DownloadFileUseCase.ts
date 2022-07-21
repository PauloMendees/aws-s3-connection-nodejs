import { DownloadFileProvider } from "../providers/AWS/implementations/DownloadFileProvider";

export class DownloadFileUseCase {
    constructor(
        private downloadFileProvider: DownloadFileProvider
    ){}

    async execute(fileKey: string, extension: string): Promise<any>{
        try {
            const fileStream = await this.downloadFileProvider.execute(fileKey, extension);
            return fileStream;
        } catch (e) {
            throw e
        }
    }
}