import { IBackround } from "../../models/backround"; 

export interface IBackroundAllResponse {
    payload:IBackround[]
    count: number
}

export interface BackroundRepo {
    create(payload:IBackround):Promise<IBackround>
    update(id:string,payload:IBackround):Promise<IBackround>
    delete(id:string):Promise<any>
    find(query:Object):Promise<IBackround[]>
    findOne(query:Object):Promise<IBackround>
    findById(id:string):Promise<IBackround>
}