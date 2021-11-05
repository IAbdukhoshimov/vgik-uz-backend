import {Router } from "express";
import { AdminController } from "../controllers/admin";

const router  = Router({mergeParams:true})
const  controller = new AdminController()

router.route("/login").post(controller.adminLogin)

export default router 