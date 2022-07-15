import { UploadFileProvider } from "../../providers/AWS/implementations/UploadFileProvider";
import { FileProvider } from "../../providers/File/implementation/FileProvider";
import { UploadFileUseCase } from "../../useCases/uploadFileUseCase";
import { UploadFileController } from "./UploadFileController";

const uploadFileController = new UploadFileController(
    new UploadFileUseCase(
        new UploadFileProvider(),
        new FileProvider()
    )
)

export { uploadFileController }