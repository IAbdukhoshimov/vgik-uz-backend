import mongoose ,{Schema, Document} from "mongoose"

export interface ITeacher extends Document{
    id:string
    name:string
    photo:string
    title:string
    rating:number
}

let teacherSchema = new mongoose.Schema({
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
    title:{
        type:String
    },
    rating:{
        type:Number,
        required:true
    }
})

export default mongoose.model<ITeacher>("Teacher",teacherSchema)
