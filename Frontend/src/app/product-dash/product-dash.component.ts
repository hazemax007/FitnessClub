import { FileHandle } from './../_models/file-model.handle';
import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/Product';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.css']
})
export class ProductDASHComponent implements OnInit {

  pageNumber:number = 0
  showLoadButton = false
  product: Product = {
    id : 0,
    name : "",
    type : "",
    price : 0,
    discount : 0,
    description : "",
    productImages : []
  } 
  listProduct:Product[] = []
  deleteProduct: Product
  editProduct: Product

  constructor(private productService:ProductService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.retrieveAllProducts()
  }

  retrieveAllProducts(searchKeyWord:string = ""): void{
    this.productService.retrieveAllProducts(this.pageNumber,searchKeyWord)
    .subscribe(
      (data:Product[])=>{
      data.forEach((prodcut) => this.listProduct.push(prodcut))
      //this.listProduct=data
      if(data.length == 3){
        this.showLoadButton = true
      }else {
        this.showLoadButton = false
      }
      console.log(data)
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }) 
  }

  public onAddProduct(addForm: NgForm): void {
    const productFormData = this.prepareFormData(this.product)
    document.getElementById('add-product-form')!.click();
    this.productService.addProduct(productFormData).subscribe(
      (data: Product) => {
        console.log(data);
        this.retrieveAllProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateProduct(product: Product , id:any): void {
    this.productService.updateProduct(product , id).subscribe(
      (data: Product) => {
        console.log(data);
        this.retrieveAllProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProduct(id: any): void {
    this.productService.deleteProduct(id).subscribe(
      (data: void) => {
        console.log(data);
        this.retrieveAllProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(product: Product, mode: string): void {
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container!.appendChild(button);
    button.click();
  }

  onFileSelected(event:any){
    if(event.target.files){
      const filee = event.target.files[0]
      const fileHandle:FileHandle = {
        file : filee,
        url : this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(filee)
        )
      }
      this.product?.productImages?.push(fileHandle)
    }
  }

  prepareFormData(product:Product):FormData{
    const formData = new FormData()
    formData.append(
      'product',
      new Blob([JSON.stringify(product)],{type:'application/json'})
    )
    for(var i=0;i<product?.productImages?.length;i++){
      formData.append(
        'imageFile',
        product?.productImages[i]?.file,
        product?.productImages[i]?.file?.name
      )
    }
    return formData
  }

  removeImage(i:any){
    this.product.productImages.splice(i,1)
  }

  loadMoreProduct(){
    this.pageNumber = this.pageNumber + 1
    this.retrieveAllProducts()
  }

  searchByKeyWord(searchKeyWord:any){
    console.log(searchKeyWord)
    this.pageNumber = 0
    this.listProduct = []
    this.retrieveAllProducts(searchKeyWord)

  }

}
