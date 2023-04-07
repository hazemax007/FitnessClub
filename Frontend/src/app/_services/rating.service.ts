import { Observable } from 'rxjs';
import { Rating } from './../_models/Rating';
import { User } from './../_models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const API_URL = 'http://localhost:8089/SpringMVC/rating/';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  currentUser: any;

  constructor(private http: HttpClient, private tokenStorageService: StorageService) {
    this.currentUser = this.tokenStorageService.getUser();
   }

   getRatingById(ratingId:any){
    return this.http.get<Rating>(API_URL + "getRating/" + ratingId)
   }

   addRating(rating:Rating, exerciseId: number,userId:number){
    return this.http.post<Rating>(API_URL + "addRating/" + exerciseId + "/" + userId , rating)
  }


}
