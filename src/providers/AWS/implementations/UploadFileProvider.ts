import { ExceptionProvider } from "../../Exception/implementation/ExceptionProvider";
import { FileProvider } from "../../File/implementation/FileProvider";
import { IUploadFileProvider } from "../interfaces/IUploadFileProvider";
import { S3 } from "../lib/S3";
import { UploadFileResponse } from "../lib/types";
const fs = require('fs')

const bucketName = `${process.env.AWS_BUCKET_NAME}`
const region = `${process.env.AWS_REGION}`

export class UploadFileProvider implements IUploadFileProvider {
    /**
     * 
     * @param fileKey File name on S3
     * @param file File to be saved on S3
     * @returns S3 upload data and success confirmation
     */
    async execute(fileKey: string, file: Express.Multer.File): Promise<UploadFileResponse> {
        try {
            const s3 = new S3()
            const fileProvider = new FileProvider()
            const fileStream = fs.createReadStream(file.path)
            const fileExtension = fileProvider.getFileExtension(file)
            const uploadParams = {
                Bucket: bucketName,
                Body: fileStream,
                Key: `${fileKey}.${fileExtension}`
            }
            const uploadResponse = await s3.getInstance().upload(uploadParams).promise()
            const objectURL = this.fileUrlGenerate(fileKey)
            return {
                error: false,
                data: {
                    s3Response: uploadResponse,
                    photo_url: objectURL
                },
                message: "File uploaded with success."
            }
        } catch (e) {
            throw new ExceptionProvider({status: 500, message: "There was an error uploading the file."})
        }
    }

    fileUrlGenerate(fileKey: string){
        return `https://${bucketName}.s3.${region}.amazonaws.com/${fileKey}.jpg`
    }
}