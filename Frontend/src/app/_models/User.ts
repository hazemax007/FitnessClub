import { Membership } from './Membership';
import { Exercise } from "./Exercise"
import { Product } from "./Product"
import { TrainingProgram } from "./TrainingProgram"
import { FileHandle } from './file-model.handle';

export class User{
    id : any
    username : string
    email : string
    password : string
    firstName : string
    lastName : string
    birthdate : Date
    phoneNumber : string
    adresse : string
    userImages : FileHandle[]
}