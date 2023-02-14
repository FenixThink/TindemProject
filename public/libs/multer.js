

import { uuid } from 'uuidv4';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: 'public/img',
    filename(req, file, cb) {
        cb(null, uuid() + path.extname(file.originalname));
    }
})

export default multer({ storage });