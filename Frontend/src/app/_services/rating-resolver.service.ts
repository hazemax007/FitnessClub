import { Rating } from './../_models/Rating';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RatingService } from './rating.service';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class RatingResolverService implements Resolve<Rating> {

  constructor(private ratingService:RatingService) { }

  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ) : Observable<Rating> {
    const id = route.paramMap.get("id")
    if(id){
      return this.ratingService.getRatingById(id)
    }else{
      return of(this.getRatingDetails())
    }
  }

  getRatingDetails(){
    return{
      id:null,
      stars:0,
      user: {
        id : null,
        username : "",
        email : "",
        password : "",
        firstName : "",
        lastName : "",
        birthdate : new Date(),
        phoneNumber : "",
        adresse : "",
        userImages : []
      },
      exercise:{
        id:null,
        name:"",
        bodyPart:"",
        level:"",
        description:"",
        average:0,
        nbrSets:0,
        nbrReps:0,
        exerciseImages:[],
        ratings:[]
      }
    }
  }
}
