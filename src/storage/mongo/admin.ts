import admin, { IAdmin } from "../../models/admin"
import { logger } from "../../config/logger";
import AppError from "../../utils/appError";

export class AdminStorage {
    private scope = "storage.admin"
    async create(payload: IAdmin): Promise<IAdmin> {
    try {
        let dbObj = await admin.create(payload)

        return dbObj
    } catch (error) {
        logger.error(`${this.scope}.create: finished with error: ${error}`)
        throw error
    }
}
}