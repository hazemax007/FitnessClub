import { UserService } from './_services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/User';
import { StorageService } from './_services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showUserBoard = false
  showAdminBoard = false;
  showEmployeeBoard = false;
  showMembreBoard = false;
  showTrainerBoard = false;
  username?: string;
  currentUser:any

  

  constructor(private tokenStorageService: StorageService,private router: Router) { }
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
      this.roles = this.currentUser.roles;

      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEmployeeBoard = this.roles.includes('ROLE_EMPLOYEE');
      this.showMembreBoard = this.roles.includes('ROLE_MEMBER');
      this.showTrainerBoard = this.roles.includes('ROLE_TRAINER');

      this.username = this.currentUser.username;
    }


  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  goToProfile(id:any){
    this.router.navigate(['goToProfile',id])
  }
}
