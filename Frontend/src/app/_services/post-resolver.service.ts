import { ImageProcessPostService } from './image-process-post.service';
import { SocialMediaService } from './social-media.service';
import { Post } from './../_models/Post';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Post>{

  constructor(private socialMediaService:SocialMediaService,private IPPS:ImageProcessPostService) { }

  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ) : Observable<Post> {
    const id = route.paramMap.get("id")
    if(id){
      return this.socialMediaService.getPostById(id)
      .pipe(
        map(p => this.IPPS.createImages(p))
      )
    }else{
      return of(this.getRatingDetails())
    }
  }

  getRatingDetails(){
    return{
      id:null,
      title:"",
      text:"",
      postImages:[],
      createdAt:new Date()
    }
  }
}
