import { Router } from "express";
import BackroundRouter from "./backround";
import TeacherRouter from "./teachers"
import CategoryRouter from "./category"
import NewsRouter from "./news"
import NotificationRouter from "./notification"
import AdminRouter from "./admin"
import AbiturentRouter from "./abiturent"
import GalleryRouter from "./gallery"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'assets/'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('image/')[1])
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext!==".docx" && ext!=='.doc') {
            return callback(new Error('Only images  and docs are allowed'))
        }
        callback(null, true)
    },
})
const router = Router({mergeParams:true})

router.use("/backround",BackroundRouter)
router.use("/teachers",TeacherRouter)
router.use("/category",upload.single('image'),CategoryRouter)
router.use("/abiturent",upload.single('doc'),AbiturentRouter)
router.use("/news",NewsRouter)
router.use("/gallery",GalleryRouter)
router.use("/notification",NotificationRouter)
router.use("/admin",AdminRouter)

export default router