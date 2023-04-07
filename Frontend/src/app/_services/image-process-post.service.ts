import { Post } from './../_models/Post';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../_models/file-model.handle';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessPostService {

  constructor(private sanitizer:DomSanitizer) { }

  public createImages(p:Post){
    const productImages:any[] = p.postImages
    const productImagesToFileHandle:FileHandle[] = []
    for(var i = 0; i < productImages?.length; i++){
      const imageFileData = productImages[i]
      const imageBlob = this.dataURItoBlob(imageFileData.picByte,imageFileData.type)
      const imageFile = new File([imageBlob] , imageFileData.name ,{ type : imageFileData.type })
      const finalFileHandle : FileHandle = {
        file:imageFile,
        url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      }
      productImagesToFileHandle.push(finalFileHandle)
    }
    p.postImages = productImagesToFileHandle
    return p
  }

  public dataURItoBlob(picBytes:any,imageType:any){
    const byteString = window.atob(picBytes)
    const arrayBuffer = new ArrayBuffer(byteString.length)
    const int8Array = new Uint8Array(arrayBuffer)
    for(let i =0; i< byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i)

    }
    const blob = new Blob([int8Array],{type:imageType})
    return blob
  }
}
