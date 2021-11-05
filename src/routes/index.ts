import { Router } from "express";
import BackroundRouter from "./backround";
import TeacherRouter from "./teachers"
import CategoryRouter from "./category"
import NewsRouter from "./news"
import NotificationRouter from "./notification"

const router = Router({mergeParams:true})

router.use("/backround",BackroundRouter)
router.use("/teachers",TeacherRouter)
router.use("/category",CategoryRouter)
router.use("/news",NewsRouter)
router.use("/notification",NotificationRouter)

export default router