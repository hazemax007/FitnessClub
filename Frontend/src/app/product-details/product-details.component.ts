import { ProductService } from './../_services/product.service';
import { Product } from './../_models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProductIndex = 0
  product:Product

  constructor(private activatedRoute : ActivatedRoute , private router:Router , private productService:ProductService) { }

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product']
  }

  changeIndex(index:any){
    this.selectedProductIndex = index
  }

  buyProduct(idProduct:any){
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout : true , id :idProduct
    }])
  }

  addToCart(productId:any){
    this.productService.addToCart(productId).subscribe(
      (response) => {
        console.log(response)
      },(error) =>{
        console.log(error)
      }
    )
  }

}
