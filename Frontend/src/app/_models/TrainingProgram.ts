import { SafeResourceUrl } from '@angular/platform-browser';
import { FileHandle } from './file-model.handle';
import { User } from './User';

export interface TrainingProgram{
    id:any
    name:string
    type:string
    level:string
    daysPerWeek:string
    description:string
    videoURL:SafeResourceUrl
    coachPictures : FileHandle[]
    coachCV : string
}