import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class NewsController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const news = await storage.news.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                news
            }
        })
    })

    get = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const news = await storage.news.findById(req.params.id)

        res.status(200).json({
            success:true,
            data:{
                news
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const news = await storage.news.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                news
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const news = await storage.news.create(req.body)

        res.status(201).json({
            success:true,
            data:{
                news
            }
        })
    })

    update = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const news = await storage.news.update(req.params.id,req.body)

        res.status(200).json({
            success:true,
            data:{
                news
            }
        })
    })

    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const news = await storage.news.delete(req.params.id)
            if(!news){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    news
                }
            })
        })
}