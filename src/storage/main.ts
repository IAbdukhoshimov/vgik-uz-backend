import { BackroundStorage } from "./mongo/backround"
import {TeacherStorage} from "./mongo/teachers"
import {CategoryStorage} from "./mongo/catergory"
import {NewsStorage} from "./mongo/news"
import {AdminStorage} from "./mongo/admin"
import {AbiturentStorage} from "./mongo/abiturent"
import {GalleryStorage} from "./mongo/gallery"

interface IStorage {
    backround: BackroundStorage
    teacher:TeacherStorage
    category:CategoryStorage
    news:NewsStorage
    admin:AdminStorage
    abiturent:AbiturentStorage
    gallery:GalleryStorage
}

export let storage: IStorage = {
    backround: new BackroundStorage(),
    teacher: new TeacherStorage(),
    category: new CategoryStorage(),
    news: new NewsStorage(),
    admin: new AdminStorage(),
    abiturent:new AbiturentStorage(),
    gallery:new GalleryStorage()
}