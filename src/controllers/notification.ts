import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class NotificationController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const notification = await storage.notification.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                notification
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const notification = await storage.notification.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                notification
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const notification = await storage.notification.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                notification
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const notification = await storage.notification.create(req.body)

        res.status(201).json({
            success:true,
            data:{
                notification
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const notification = await storage.notification.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                notification
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const notification = await storage.notification.delete(req.params.id)
            if(!notification){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    notification
                }
            })
        })
}