import { ExceptionProvider } from "../../Exception/implementation/ExceptionProvider";
import { IDeleteFileProvider } from "../interfaces/IDeleteFileProvider";
import { S3 } from "../lib/S3";

export class DeleteFileProvider implements IDeleteFileProvider{
    async execute(fileKey: string, extension: string): Promise<void> {
        try {
            const s3 = new S3()
            var options = {
                Bucket: `${process.env.BUCKET_NAME}`,
                Key: `${fileKey}.${extension}`,
            };
            await s3.getInstance().deleteObject(options, function(err: any, data: any) {
                if (err) throw err;  // error
              });
        } catch (e) {
            throw new ExceptionProvider({status: 500, message: "There was an error deleting the file."})
        }
    }

}