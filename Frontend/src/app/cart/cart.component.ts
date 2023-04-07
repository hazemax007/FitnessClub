import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../_models/Cart';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listCart : Cart[] = []
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getCartDetails()
  }

  getCartDetails(){
    this.productService.getCartDetails().subscribe(
      (response:Cart[]) => {
        console.log(response)
        this.listCart = response
      },(error) => {
        console.log(error)
      }
    );
  }

  checkout(){
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout : false , id :0
    }])
    /*this.productService.getProductDetails(false,0).subscribe(
      (data) =>{
        console.log(data)
      },(err) =>{
        console.log(err)
      }
    )*/
  }

}
