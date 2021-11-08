import mongoose,{Schema, Document} from "mongoose"

export interface iAbiturent extends Document{
    id:string
    title:string
    photo:string
}

let abiturentSchema = new mongoose.Schema({
    title:{
        type:String
    },
    photo:{
        type:String
    }
})

export default mongoose.model<iAbiturent>("Abiturent",abiturentSchema)