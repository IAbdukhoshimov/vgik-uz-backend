import {TeacherStorage} from "./mongo/teachers"
import {CategoryStorage} from "./mongo/catergory"
import {AdminStorage} from "./mongo/admin"
import {AbiturentStorage} from "./mongo/abiturent"
import {GalleryStorage} from "./mongo/gallery"

interface IStorage {
    teacher:TeacherStorage
    category:CategoryStorage
    admin:AdminStorage
    abiturent:AbiturentStorage
    gallery:GalleryStorage
}

export let storage: IStorage = {
    teacher: new TeacherStorage(),
    category: new CategoryStorage(),
    admin: new AdminStorage(),
    abiturent:new AbiturentStorage(),
    gallery:new GalleryStorage()
}