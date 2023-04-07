import { FileHandle } from "./file-model.handle"
import { User } from "./User"

export interface Post{
    id:any
    title:string
    text:string
    postImages:FileHandle[]
    createdAt:Date
}