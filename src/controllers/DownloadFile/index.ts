import { DownloadFileProvider } from "../../providers/AWS/implementations/DownloadFileProvider";
import { DownloadFileUseCase } from "../../useCases/DownloadFileUseCase";
import { DownloadFileController } from "./DownloadFileController";

const downloadFileController = new DownloadFileController(
    new DownloadFileUseCase(
        new DownloadFileProvider()
    )
)

export { downloadFileController }