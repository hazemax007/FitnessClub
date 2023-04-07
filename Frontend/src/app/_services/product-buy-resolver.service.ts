import { ImageProcessingService } from './image-processing.service';
import { Product } from './../_models/Product';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductBuyResolverService implements Resolve<Product[]>{

  constructor(private productService:ProductService,private IPS:ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
    const id = route.paramMap.get("id")
    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout")
    return this.productService.getProductDetails(isSingleProductCheckout,id)
    .pipe(
      map((x:Product[],i) => x.map((product:Product) => this.IPS.createImages(product)))
    )
  }
}
