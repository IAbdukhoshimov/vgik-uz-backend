import { IGallery } from "../../models/gallery"; 

export interface IGalllerytAllResponse {
    payload:IGallery[]
    count: number
}

export interface GalleryRepo {
    create(payload:IGallery):Promise<IGallery>
    update(id:string,payload:IGallery):Promise<IGallery>
    delete(id:string):Promise<any>
    find(query:Object):Promise<IGallery[]>
    findOne(query:Object):Promise<IGallery>
    findById(id:string):Promise<IGallery>
}