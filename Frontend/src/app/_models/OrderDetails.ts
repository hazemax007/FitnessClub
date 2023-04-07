import { OrderQuantity } from './OrderQuantity';
export interface OrderDetails{
    fullName:string
    fullAdresse:string
    contactNumber:string
    alternateContactNumber:string
    orderProductQuantityList:OrderQuantity[]
}