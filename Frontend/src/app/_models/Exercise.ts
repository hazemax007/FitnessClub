import { Rating } from './Rating';
import { FileHandle } from "./file-model.handle"

export class Exercise{
    id:any
    name:string
    bodyPart:string
    level:string
    description:string
    average:any
    nbrSets:any
    nbrReps:any
    exerciseImages:FileHandle[]
    ratings:Rating[]
}