import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class BackroundController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const backround = await storage.backround.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                backround
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const backround = await storage.backround.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                backround
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const backround = await storage.backround.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                backround
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const backround = await storage.backround.create(req.body)

        res.status(201).json({
            success:true,
            data:{
                backround
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const backround = await storage.backround.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                backround
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const backround = await storage.backround.delete(req.params.id)
            if(!backround){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    backround
                }
            })
        })
}