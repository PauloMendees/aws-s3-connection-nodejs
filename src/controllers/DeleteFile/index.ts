import { DeleteFileProvider } from "../../providers/AWS/implementations/DeleteFileProvider";
import { DeleteFileUseCase } from "../../useCases/deleteFileUseCase";
import { DeleteFileController } from "./DeleteFileController";

const deleteFileController = new DeleteFileController(
    new DeleteFileUseCase(
        new DeleteFileProvider()
    )
)

export { deleteFileController }