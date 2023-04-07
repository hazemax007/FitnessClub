import { map } from 'rxjs/operators';
import { ImageProcessingService } from './../_services/image-processing.service';
import { Router } from '@angular/router';
import { Product } from './../_models/Product';
import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pageNumber:number = 0
  showLoadButton = false
  listProduct : Product[] = []
  product:Product
  constructor(private productService:ProductService,private router:Router,private IPS:ImageProcessingService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  public getAllProducts(searchKey: string = ""){
    this.productService.retrieveAllProducts(this.pageNumber,searchKey)
    .pipe(
      map((x:Product[],i) => x.map((productt:Product) => this.IPS.createImages(productt)))
    )
    .subscribe(data =>{
      if(data.length == 3){
        this.showLoadButton = true
      }else{
        this.showLoadButton = false
      }
      data.forEach(p => this.listProduct.push(p))
      //this.listProduct=data
      console.log(data)
    })
  }

  goToProduct(id:any){
    this.router.navigate(['/goToProduct',{id:id}])
  }

  loadMoreProduct(){
    this.pageNumber = this.pageNumber + 1
    this.getAllProducts()
  }

  searchByKeyWord(searchKeyWord:any){
    console.log(searchKeyWord)
    this.pageNumber = 0
    this.listProduct = []
    this.getAllProducts(searchKeyWord)

  }

}
