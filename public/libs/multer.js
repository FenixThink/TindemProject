import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: 'public/img',
    filename(_, file, cb) {
        const acceptedExtensions = ['jpg', 'png'];
        cb(null, uuidv4() + path.extname(file.originalname));
    }
})

export default multer({ storage });