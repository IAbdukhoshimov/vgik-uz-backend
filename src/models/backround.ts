import mongoose , {Schema , Document} from "mongoose"

export interface IBackround extends Document{
    id:string
    name:string
    photo:string
}

let backroundSchema = new mongoose.Schema({
    name:{
        type:String
    },
    photo:{
        type:{
            data:Buffer,
            contentType:String
        }
    }
})

export default mongoose.model<IBackround>("Backround",backroundSchema)
