import { ImageProcessPostService } from './../_services/image-process-post.service';
import { SocialMediaService } from './../_services/social-media.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/Post';
import { map } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listPosts:Post[] = []
  post:Post

  constructor(private socialMediaService:SocialMediaService,private IPPS:ImageProcessPostService) { }

  ngOnInit(): void {
    this.retrieveAllPosts()
  }

  retrieveAllPosts(){
    this.socialMediaService.retrieveAllPosts()
    .pipe(
      map((x:Post[],i) => x.map((p:Post) => this.IPPS.createImages(p)))
    )
    .subscribe(
      (data:Post[]) => {
        this.listPosts =data
        console.log(data)
      }

    )
  }

}
