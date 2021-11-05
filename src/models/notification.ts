import mongoose,{Schema,Document} from "mongoose"

export interface INotification extends Document{
    id:string
    name:string
    photo:string
    title:string
}

let notificationSchema = new mongoose.Schema({
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
        type:String,
        required:true
    }
})

export default mongoose.model<INotification>("Notification",notificationSchema)
