import { ImageProcessPostService } from './../_services/image-process-post.service';
import { SocialMediaService } from './../_services/social-media.service';
import { Post } from './../_models/Post';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listPost:Post[] = []
  post:Post
  constructor(private postService:SocialMediaService,private IPPS:ImageProcessPostService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  goToPost(id:any){
    this.router.navigate(['/goToPost',{id:id}])
  }

  getAllPosts(){
    this.postService.retrieveAllPosts()
    .pipe(
      map((x:Post[],i) => x.map((p:Post) => this.IPPS.createImages(p)))
    )
    .subscribe(data  =>{
      this.listPost=data
      console.log(data)
    })
  }

}
