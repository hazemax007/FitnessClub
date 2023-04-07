import { ProductService } from './../_services/product.service';
import { Product } from './../_models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OrderDetails } from './../_models/OrderDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.css']
})
export class ProductBuyComponent implements OnInit {

  productDetails : Product[] = []
  isSingleProductCheckout : any = '' 
  orderDetails:OrderDetails ={
    fullName: '',
    fullAdresse: '',
    contactNumber: '',
    alternateContactNumber: '',
    orderProductQuantityList: []
  }

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productDetails =  this.activatedRoute.snapshot.data['productDetails']
    this.isSingleProductCheckout = this.activatedRoute.snapshot.paramMap.get("isSingleProductCheckout")
    this.productDetails.forEach(
      x => this.orderDetails.orderProductQuantityList.push(
        {productId: x.id , quantity:1}
      )
    )
  }

  placeOrder(orderForm:NgForm){
    this.productService.placeOrder(this.orderDetails,this.isSingleProductCheckout).subscribe(
      (resp) => {
        console.log(resp)
        orderForm.reset()
        this.router.navigate(["/orderConfirmation"])
      },
      (err) => {
        console.log(err)
      }
    )
  }

  getQuantityForProduct(productId:any){
    const filteredProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productId
    )
    return filteredProduct[0].quantity
  }

  getCalculatedTotal(productId:any, productDiscount:any){
    const filteredProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productId
    )
    return filteredProduct[0].quantity * productDiscount
  }

  onQuantityChanged(qte:any,productId:any){
    this.orderDetails.orderProductQuantityList.filter(
      (orderProduct) => orderProduct.productId == productId
    )[0].quantity = qte
  }

  getCalculatedGrandTotal(){
    let grandTotal = 0
    this.orderDetails.orderProductQuantityList.forEach(
      (productQuantity) => {
        const price = this.productDetails.filter(product => product.id === productQuantity.productId)[0].discount
        grandTotal = grandTotal + price * productQuantity.quantity
      }
    )
    return grandTotal
  }

}
