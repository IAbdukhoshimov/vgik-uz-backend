import mongoose,{Schema,Document} from "mongoose"

export interface INews extends Document{
    id:string
    name:string
    photo:string
    description:string
}

let newsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    photo:{
        type:{
            data:Buffer,
            contentType:String
        }
    },
    description:{
        type:String,
    }
})

export default mongoose.model<INews>("News",newsSchema)
