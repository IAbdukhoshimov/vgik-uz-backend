import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class TeacherController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const teacher = await storage.teacher.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                teacher
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const teachers = await storage.teacher.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                teachers
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const teacher = await storage.teacher.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                teacher
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const teacher = await storage.teacher.create(req.body)

        res.status(201).json({
            success:true,
            data:{
                teacher
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const teacher = await storage.teacher.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                teacher
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const teacher = await storage.teacher.delete(req.params.id)
            if(!teacher){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    teacher
                }
            })
        })
}