import { OrderDetails } from './../_models/OrderDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_models/Product';
import { Cart } from '../_models/Cart';

const API_URL = 'http://localhost:8089/SpringMVC/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  retrieveAllProducts(pagenumber:number,searchKey:string = ""):Observable<any>{
    return this.http.get(API_URL + "retrieve-all-products?pagenumber="+pagenumber+"&searchKey="+searchKey)
  }

  public addProduct(product:FormData){
    return this.http.post<Product>(API_URL + "add-product" , product)
  }

  public updateProduct(product: Product , id:any): Observable<Product> {
    return this.http.put<Product>(API_URL + "update-product/" + id , product);
  }

  public deleteProduct(id: any): Observable<void> {
    return this.http.delete<void>(API_URL + "delete-product/" + id);
  }

  getProductById(id:any){
    return this.http.get<Product>(API_URL + 'get-product-by-id/' + id);
  }

  getProductDetails(isSingleProductCheckout:any,productId:any){
    return this.http.get<Product[]>(API_URL + "getProductDetails/" + isSingleProductCheckout +"/" + productId)
  }

  placeOrder(isSingleProductCheckout:any,orderDetails:OrderDetails){
    return this.http.post("http://localhost:8089/SpringMVC/orderDetail/placeOrder/"+isSingleProductCheckout,orderDetails)
  }

  addToCart(productId:any){
    return this.http.get("http://localhost:8089/SpringMVC/cart/addToCart/"+productId)
  }

  getCartDetails(){
    return this.http.get<Cart[]>("http://localhost:8089/SpringMVC/cart/getCartDetails")
  }

  
  
}
