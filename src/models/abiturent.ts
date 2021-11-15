import mongoose,{Schema, Document} from "mongoose"

export interface iAbiturent extends Document{
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

export default mongoose.model<iAbiturent>("Abiturent",abiturentSchema)