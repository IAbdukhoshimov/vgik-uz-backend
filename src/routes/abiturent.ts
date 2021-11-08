import {Router } from "express";
import { AbiturentController } from "../controllers/abiturent";

const router  = Router({mergeParams:true})
const  controller = new AbiturentController()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(controller.update)
    .delete(controller.delete)
    .post(controller.create)

export default router 
