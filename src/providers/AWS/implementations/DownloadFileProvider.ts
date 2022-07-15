import { ExceptionProvider } from "../../Exception/implementation/ExceptionProvider";
import { IDownloadFileProvider } from "../interfaces/IDownloadFileProvider";
import { S3 } from "../lib/S3";

export class DownloadFileProvider implements IDownloadFileProvider {
    async execute(fileKey: string, extension: string): Promise<any> {
        try {
            const s3 = new S3()
            var options = {
                Bucket: `${process.env.BUCKET_NAME}`,
                Key: `${fileKey}.${extension}`,
            };
            var fileStream = s3.getInstance().getObject(options).createReadStream();

            if(!fileStream) throw new ExceptionProvider({status: 404, message: "File not found."})
            
            return fileStream
        } catch (error) {
            throw new ExceptionProvider({status: 500, message: "There was an error downloading the file."})
        }
    }

}