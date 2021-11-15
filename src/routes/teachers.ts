import {Router } from "express";
import { TeacherController } from "../controllers/teachers";

const router  = Router({mergeParams:true})
const  controller = new TeacherController()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .delete(controller.delete)
    .post(controller.create)

export default router 