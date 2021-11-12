import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class GalleryController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const gallery = await storage.gallery.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                gallery
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const gallery = await storage.gallery.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                gallery
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const gallery = await storage.gallery.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                gallery
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const category = await storage.category.create({...req.body, photo:req.file?.filename})

        res.status(201).json({
            success:true,
            data:{
                category
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const gallery = await storage.gallery.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                gallery
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const gallery = await storage.gallery.delete(req.params.id)
            if(!gallery){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    gallery
                }
            })
        })
}