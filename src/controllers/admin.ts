import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class AdminController{
    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const admin = await storage.admin.create(req.body)

        res.status(201).json({
            success:true,
            data:{
                admin
            }
        })
    })

}