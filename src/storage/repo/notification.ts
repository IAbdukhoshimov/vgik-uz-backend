import { INotification } from "../../models/notification"

export interface INotificationAllResponse {
    payload:INotification[]
    count: number
}

export interface NotificationRepo {
    create(payload:INotification):Promise<INotification>
    update(id:string,payload:INotification):Promise<INotification>
    delete(id:string):Promise<any>
    find(query:Object):Promise<INotification[]>
    findOne(query:Object):Promise<INotification>
    findById(id:string):Promise<INotification>
}