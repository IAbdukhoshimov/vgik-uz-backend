import { ICategory } from "../../models/categories"; 

export interface ICatergoryAllResponse {
    payload:ICategory[]
    count: number
}

export interface CategoryRepo {
    create(payload:ICategory):Promise<ICategory>
    delete(id:string):Promise<any>
    find(query:Object):Promise<ICategory[]>
    findOne(query:Object):Promise<ICategory>
}