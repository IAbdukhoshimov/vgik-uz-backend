import { BackroundStorage } from "./mongo/backround"
import {TeacherStorage} from "./mongo/teachers"
import {CategoryStorage} from "./mongo/catergory"
import {NewsStorage} from "./mongo/news"
import {NotificationStorage} from "./mongo/notification"
import {AdminStorage} from "./mongo/admin"

interface IStorage {
    backround: BackroundStorage
    teacher:TeacherStorage
    category:CategoryStorage
    news:NewsStorage
    notification:NotificationStorage
    admin:AdminStorage
}

export let storage: IStorage = {
    backround: new BackroundStorage(),
    teacher: new TeacherStorage(),
    category: new CategoryStorage(),
    news: new NewsStorage(),
    notification: new NotificationStorage(),
    admin: new AdminStorage()
}