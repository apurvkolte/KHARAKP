import { createRouter } from 'next-connect';
import connection from '../../../config/connection'
import { newProperty } from '../../../controllers/propertyController'
import onError from '../../../middlewares/error'
// import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/images/property',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});


const router = createRouter({ onError });

connection.getConnection((error) => {
    if (error) throw error;
    if (error) {
        console.log("Database connection failed :", error.message);
    }
});

router.use(upload.array('file'));

router
    .post(newProperty);

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
}

export default router.handler();



