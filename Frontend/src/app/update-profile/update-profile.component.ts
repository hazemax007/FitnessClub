import { TrainingProgram } from './../_models/TrainingProgram';
import { ProfileService } from './../_services/profile.service';
import { User } from './../_models/User';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandle } from '../_models/file-model.handle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

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
  id: any;
  hide = true;

  constructor(private route: ActivatedRoute,private router: Router,
    private profileService:ProfileService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.profileService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }


  

  updateProfile() {
    const productFormData = this.prepareFormData(this.user)
    this.profileService.updateUser(this.user.id, productFormData)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.updateProfile();    
  }

  gotoList() {
    this.router.navigate(['/profile']);
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
      this.user?.userImages?.push(fileHandle)
    }
  }

  prepareFormData(user:User):FormData{
    const formData = new FormData()
    formData.append(
      'user',
      new Blob([JSON.stringify(user)],{type:'application/json'})
    )
    for(var i=0;i<user?.userImages?.length;i++){
      formData.append(
        'imageFile',
        user?.userImages[i]?.file,
        user?.userImages[i]?.file?.name
      )
    }
    return formData
  }

  removeImage(i:any){
    this.user.userImages.splice(i,1)
  }

}
