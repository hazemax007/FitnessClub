import { FileHandle } from './file-model.handle';
export interface Product{
    id:any
    name:string
    type:string
    price:any
    discount:any
    description:string
    productImages:FileHandle[]
}