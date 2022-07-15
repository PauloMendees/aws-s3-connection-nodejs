export interface IDeleteFileProvider {
    execute(fileKey: string, extension: string): Promise<void>
}