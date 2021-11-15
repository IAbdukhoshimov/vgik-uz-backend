import {Router } from "express";
import { GalleryController } from "../controllers/gallery";

const router  = Router({mergeParams:true})
const  controller = new GalleryController()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .delete(controller.delete)
    .post(controller.create)

export default router 