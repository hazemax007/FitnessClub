import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ImageProcessingService } from './image-processing.service';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../_models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product> {

  constructor(private productService : ProductService , private IPS : ImageProcessingService) { }

  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ) : Observable<Product> {
    const id = route.paramMap.get("id")
    if(id){
      return this.productService.getProductById(id)
      .pipe(
        map(p => this.IPS.createImages(p))
      )
    }else{
      return of(this.getProductDetails())
    }
  }

  getProductDetails(){
    return{
      id:null,
      name:"",
      type:"",
      price:0,
      discount:0,
      description:"",
      productImages:[]
    }
  }
}
