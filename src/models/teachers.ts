import mongoose ,{Schema, Document} from "mongoose"

export interface ITeacher extends Document{
    id:string
    name:string
    photo:string
    title:string
}

let teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    photo:{
        type:String
    },
    title:{
        type:String
    },
})

export default mongoose.model<ITeacher>("Teacher",teacherSchema)
