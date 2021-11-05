import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class CategoryController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const category = await storage.category.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                category
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const category = await storage.category.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                category
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const category = await storage.category.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                category
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const category = await storage.category.create( req.body)

        res.status(201).json({
            success:true,
            data:{
                category
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const category = await storage.category.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                category
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const category = await storage.category.delete(req.params.id)
            if(!category){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    category
                }
            })
        })
}