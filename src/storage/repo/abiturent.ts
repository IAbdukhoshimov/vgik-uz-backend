import { iAbiturent } from "../../models/abiturent"; 

export interface IAbiturentAllResponse {
    payload:iAbiturent[]
    count: number
}

export interface AbiturentRepo {
    create(payload:iAbiturent):Promise<iAbiturent>
    update(id:string,payload:iAbiturent):Promise<iAbiturent>
    delete(id:string):Promise<any>
    find(query:Object):Promise<iAbiturent[]>
    findOne(query:Object):Promise<iAbiturent>
    findById(id:string):Promise<iAbiturent>
}