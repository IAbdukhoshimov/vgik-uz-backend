import mongoose, {Schema,Document} from "mongoose"

export interface ICategory extends Document{
    id:string
    name:string
    photo:string
    text1:string
    text2:string
    text3:string
}

let categorySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    photo:{
       type:String,
    },
    text1:{
        type:String,
    },
    text2:{
        type:String,
    },
    text3:{
        type:String,
    }
})

export default mongoose.model<ICategory>("Category",categorySchema)
