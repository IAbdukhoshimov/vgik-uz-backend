import { AbiturentRepo } from "../repo/abiturent";
import Abiturent,{IAbiturent} from "../../models/abiturent"
import { logger } from "../../config/logger";
import AppError from "../../utils/appError";

export class AbiturentStorage implements AbiturentRepo{
    private scope = "storage.abiturent"

    async find(query:Object):Promise<IAbiturent[]>{
        try{
            let dbobj = await Abiturent.find({...query})
            
            return dbobj
        }catch(error){
            logger.error(`${this.scope}.find: finished with error: ${error}`)
            throw error
        }
    }

    async findOne(query: Object): Promise<IAbiturent> {
        try {
            let dbObj = await Abiturent.findOne({ ...query })

            if (!dbObj) {
                logger.warn(`${this.scope}.get failed to findOne`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.findOne: finished with error: ${error}`)
            throw error
        }
    }

    async create(payload: IAbiturent): Promise<IAbiturent> {
        try {
            let dbObj = await Abiturent.create(payload)

            return dbObj
        } catch (error) {
            console.log(error)
            logger.error(`${this.scope}.create: finished with error: ${error}`)
            throw error
        }
    }

    async delete(id: string): Promise<any> {
        try {
            let dbObj = await Abiturent.findByIdAndDelete(id)

            if (!dbObj) {
                logger.warn(`${this.scope}.delete failed to findByIdAndDelete`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.delete: finished with error: ${error}`)
            throw error
        }
    }
}