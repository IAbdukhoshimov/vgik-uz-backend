import { INews } from "../../models/news"; 

export interface INewAllResponse {
    payload:INews[]
    count: number
}

export interface NewsRepo {
    create(payload:INews):Promise<INews>
    update(id:string,payload:INews):Promise<INews>
    delete(id:string):Promise<any>
    find(query:Object):Promise<INews[]>
    findOne(query:Object):Promise<INews>
    findById(id:string):Promise<INews>
}