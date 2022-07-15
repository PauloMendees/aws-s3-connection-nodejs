export interface IFileProvider {
    getFileExtension(file: Express.Multer.File): string
    extensionValidate(validExtensions: string[], file: Express.Multer.File): boolean
    sizeFileValidate(file: Express.Multer.File, maxSize: number): boolean
}