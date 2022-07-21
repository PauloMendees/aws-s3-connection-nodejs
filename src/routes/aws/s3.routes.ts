import { Router } from 'express'
import { deleteFileController } from '../../controllers/DeleteFile'
import { downloadFileController } from '../../controllers/DownloadFile'
import { uploadFileController } from '../../controllers/UploadFile'

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const awsRouter = Router()

awsRouter.post('/api/s3/upload/:fileKey', upload.single("file"), uploadFileController.handle)
awsRouter.delete('/api/s3/delete/:fileKey', deleteFileController.handle)
awsRouter.get('/api/s3/get/:fileKey', downloadFileController.handle)

export { awsRouter }