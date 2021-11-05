import {Router } from "express";
import { TeacherController } from "../controllers/teachers";

const router  = Router({mergeParams:true})
const  controller = new TeacherController()
// const validator = new SmsValidator()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.delete)
    .post(controller.create)

export default router 