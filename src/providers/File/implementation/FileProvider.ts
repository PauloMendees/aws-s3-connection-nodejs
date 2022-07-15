import { IFileProvider } from "../interface/IFileProvider";

export class FileProvider implements IFileProvider{
    /**
     * @param file Arquivo a ser obtido a extensão
     * @returns Retorna a extensão da file especificada
     */
    getFileExtension(file: Express.Multer.File): string {
        const splitedString = file.originalname.split('.')
        const sizeSplitedString = splitedString.length;
        return splitedString[sizeSplitedString - 1].toString();
    }
    
    /**
     * @param validExtension Extensão aceita
     * @param file Arquivo a ser verificado
     * @returns retorna um booleano, se a extensão for válida --> true, caso contrário --> false
     */
    extensionValidate(validExtensions: string[], file: Express.Multer.File): boolean {
        const fileExtension = this.getFileExtension(file)
        return validExtensions.includes(fileExtension);
    }
    
    /**
     * @param file Arquivo a ser verificado
     * @param maxSize Tamanho máximo de arquivo
     * @returns Retorna se o arquivo está dentro do tabanho válido ( true or false )
     */
    sizeFileValidate(file: Express.Multer.File, maxSize: number): boolean {
        return file.size <= maxSize
    }
}