export interface IDownloadFileProvider {
    execute(fileKey: string, extension: string): Promise<any>
}