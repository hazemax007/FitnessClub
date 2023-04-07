import { User } from './../_models/User';
import { ProfileService } from './../_services/profile.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageProcessProfileService } from '../_services/image-process-profile.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:any
  currentUser: any;
  user:User = {
    id: 0,
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthdate: new Date(),
    phoneNumber: "",
    adresse: "",
    userImages: []
    
  }


  constructor(private token: StorageService , private profileService:ProfileService , private router:Router,
    private activatedRoute: ActivatedRoute,private IPPS:ImageProcessProfileService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    

    this.id = this.activatedRoute.snapshot.params['id'];
    
    this.profileService.getUserById(this.id)
    .pipe(
      map(u => this.IPPS.createImages(u))
    )
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  goToUpdate(id:any){
    this.router.navigate(['goUpdate',id])
  }

}
