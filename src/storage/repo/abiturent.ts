import { IAbiturent } from "../../models/abiturent"; 

export interface IAbiturentAllResponse {
    payload:IAbiturent[]
    count: number
}

export interface AbiturentRepo {
    create(payload:IAbiturent):Promise<IAbiturent>
    delete(id:string):Promise<any>
    find(query:Object):Promise<IAbiturent[]>
    findOne(query:Object):Promise<IAbiturent>
}