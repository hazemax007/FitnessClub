import { Product } from "./Product"

export class Facture{
    id : any
    ref : string
    owner : string
    totalNet : any
    totalBrut : any
    description : string
    products : Product[]
}