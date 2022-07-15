import { DeleteFileProvider } from "../providers/AWS/implementations/DeleteFileProvider";

export class DeleteFileUseCase {
    constructor(
        private deleteFileProvider: DeleteFileProvider
    ){}

    async execute(fileKey: string): Promise<void>{
        try {
            await this.deleteFileProvider.execute(fileKey, 'pdf')
        } catch (e) {
            throw e;
        }
    }
}