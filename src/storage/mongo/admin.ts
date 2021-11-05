import admin, { IAdmin } from "../../models/admin"
import { logger } from "../../config/logger";
import AppError from "../../utils/appError";

export class AdminStorage {
    private scope = "storage.admin"

    async findOne(query:Object):Promise<IAdmin |
     null>{
        try{
            let dbobj = await admin.findOne({...query}) 
            
            if(!dbobj) throw new Error('Admin not found')
            return dbobj
        }catch(error){
           return null
        }
    }
}