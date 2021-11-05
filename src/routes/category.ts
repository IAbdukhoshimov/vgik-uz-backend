import {Router } from "express";
import { CategoryController } from "../controllers/category";

const router  = Router({mergeParams:true})
const  controller = new CategoryController()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.delete)
    .post(controller.create)

export default router 
