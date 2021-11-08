import mongoose,{ Schema, Document} from "mongoose"

export interface IGallery extends Document{
    id:string
    title:string
    photo:string 
}

let gallerySchema = new mongoose.Schema({
    title:{
        type:String
    },
    photo:{
        type:String
    }
})

export default mongoose.model<IGallery>("Gallery",gallerySchema)
