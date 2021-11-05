import { ITeacher } from "../../models/teachers"; 

export interface ITeacherAllResponse {
    payload:ITeacher[]
    count: number
}

export interface TeacherRepo {
    create(payload:ITeacher):Promise<ITeacher>
    update(id:string,payload:ITeacher):Promise<ITeacher>
    delete(id:string):Promise<any>
    find(query:Object):Promise<ITeacher[]>
    findOne(query:Object):Promise<ITeacher>
    findById(id:string):Promise<ITeacher>
}