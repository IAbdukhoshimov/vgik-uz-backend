import mongoose,{Schema, Document} from "mongoose"

export interface IAbiturent extends Document{
    id:string
    title:string
    docx:string
    text:string
}

let abiturentSchema = new mongoose.Schema({
    title:{
        type:String
    },
    docx:{
        type:String
    },
    text:{
        type:String
    }
})

export default mongoose.model<IAbiturent>("Abiturent",abiturentSchema)