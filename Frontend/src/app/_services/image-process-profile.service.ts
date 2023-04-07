import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { FileHandle } from '../_models/file-model.handle';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessProfileService {

  constructor(private sanitizer:DomSanitizer) { }

  public createImages(user:User){
    const productImages:any[] = user.userImages
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
    user.userImages = productImagesToFileHandle
    return user
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
