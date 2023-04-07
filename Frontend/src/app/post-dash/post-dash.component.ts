import { DomSanitizer } from '@angular/platform-browser';
import { SocialMediaService } from './../_services/social-media.service';
import { Post } from './../_models/Post';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FileHandle } from '../_models/file-model.handle';
import { Exercise } from '../_models/Exercise';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.css']
})
export class PostDASHComponent implements OnInit {
  post:Post = {
    id:0,
    title:"",
    text:"",
    postImages:[],
    createdAt: new Date()
  }
  listPost:Post[]
  deletePost:Post
  editPost:Post

  constructor(private postService:SocialMediaService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.retrieveAllPosts()
  }

  retrieveAllPosts(): void{
    this.postService.retrieveAllPosts()
    .subscribe(
      data=>{
      this.listPost = data
      console.log(data)
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }) 
  }

  public onAddPost(addForm: NgForm): void {
    const postFormData = this.prepareFormData(this.post)
    document.getElementById('add-exercice-form')!.click();
    this.postService.addPost(postFormData).subscribe(
      (data: Post) => {
        console.log(data);
        this.retrieveAllPosts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePost(post: Post , id:any): void {
    this.postService.updatePost(post , id).subscribe(
      (data: Post) => {
        console.log(data);
        this.retrieveAllPosts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePost(id: any): void {
    this.postService.deletePost(id).subscribe(
      (data: void) => {
        console.log(data);
        this.retrieveAllPosts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(post: Post, mode: string): void {
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPostModal');
    }
    if (mode === 'edit') {
      this.editPost = post;
      button.setAttribute('data-target', '#updatePostModal');
    }
    if (mode === 'delete') {
      this.deletePost = post;
      button.setAttribute('data-target', '#deletePostModal');
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
      this.post?.postImages?.push(fileHandle)
    }
  }

  prepareFormData(post:Post):FormData{
    const formData = new FormData()
    formData.append(
      'post',
      new Blob([JSON.stringify(post)],{type:'application/json'})
    )
    for(var i=0;i<post?.postImages?.length;i++){
      formData.append(
        'imageFile',
        post?.postImages[i]?.file,
        post?.postImages[i]?.file?.name
      )
    }
    return formData
  }

  removeImage(i:any){
    this.post.postImages.splice(i,1)
  }
  

}
