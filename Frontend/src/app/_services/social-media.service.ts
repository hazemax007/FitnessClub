import { Post } from './../_models/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8089/SpringMVC/blog/';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(private http:HttpClient) { }

  retrieveAllPosts():Observable<any>{
    return this.http.get(API_URL + "getAllPosts")
  }

  public addPost(post:FormData){
    return this.http.post<Post>(API_URL + "addPost" , post)
  }

  public updatePost(post: Post , id:any): Observable<Post> {
    return this.http.put<Post>(API_URL + "updatePost/" + id , post);
  }

  public deletePost(id: any): Observable<void> {
    return this.http.delete<void>(API_URL + "deletePost/" + id);
  }

  getPostById(id:any){
    return this.http.get<Post>(API_URL + 'getPost/' + id);
  }
}
