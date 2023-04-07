import { ProfileService } from './profile.service';
import { ImageProcessProfileService } from './image-process-profile.service';
import { User } from './../_models/User';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User>{

  constructor(private profileService:ProfileService,private IPPS:ImageProcessProfileService) { }
  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ) : Observable<User> {
    const id = route.paramMap.get("id")
    if(id){
      return this.profileService.getUserById(id)
      .pipe(
        map(u => this.IPPS.createImages(u))
      )
    }else{
      return of(this.getuserDetails())
    }
  }

  getuserDetails(){
    return{
    id : null,
    username : "",
    email : "",
    password : "",
    firstName : "",
    lastName : "",
    birthdate : new Date(),
    phoneNumber : "",
    adresse : "",
    userImages : [],
    skillLevel : "",
    experienceLevel : "",
    Availibility : ""
    }
  }
}
