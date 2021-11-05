import {Router } from "express";
import { NotificationController } from "../controllers/notification";

const router  = Router({mergeParams:true})
const  controller = new NotificationController()
// const validator = new SmsValidator()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.delete)
    .post(controller.create)

export default router 